L.Control.Area = L.Control.extend({
    onAdd: function(op) {
        var div = L.DomUtil.create('div');
        div.classList.add('leaflet-control', 'leaflet-bar', 'area');
        div.innerHTML = 'Площадь, км^2: ' + (this.options.area || 0).toFixed(2);
        return div;
    },
});
L.control.area = function(op) {
    return new L.Control.Area(op);
};

var Zone = function(_map) {
    var map = _map,
        polygon = null,
        markers = [];

    map.on('click', function(e) {
        var index = 0,
            minDistance = Infinity;

        for (var i = 0; i < markers.length; i++) {
            var d = map.distance(e.latlng, markers[i]._latlng);
            if (d < minDistance) {
                minDistance = d;
                index = i;
            }
        }

        self.marker.add(e.latlng, index);
        self.marker.middle.refresh();
        self.polygon.set();
    });

    var area = L.control.area({
        position: 'topright'
    }).addTo(map);

    var self = {
        marker: {
            handlers: {
                click: function(e) {
                    self.marker.del(self.marker.find(e.target._leaflet_id));
                    self.polygon.set();
                    self.marker.middle.refresh();
                },
                dragend: function(e) {
                    self.polygon.set();
                    self.marker.middle.refresh();
                }
            },
            find: function(val) {
                for (var i = 0; i < markers.length; i++) {
                    if (markers[i]._leaflet_id === val) {
                        return i;
                    }
                }

                return -1;
            },
            index: function(index, max) {
                return (typeof index !== 'number' || index > max || index < 0) ?
                    max : index;
            },
            add: function(latlng, index) {
                index = self.marker.index(index, markers.length);

                markers.splice(index, 0, L.marker(latlng, {
                    draggable: true
                }).addTo(map).on(self.marker.handlers));
            },
            del: function(index) {
                index = self.marker.index(index, markers.length - 1);

                map.removeLayer(markers.splice(index, 1)[0]);
            },
            on: function() {
                if (!polygon) {
                    return false;
                }

                self.marker.off();

                polygon.getLayers()[0]._latlngs[0].map(function(n) {
                    self.marker.add(n);
                });

                self.marker.middle.refresh();

                area.remove();
                area = L.control.area({
                    position: 'topright',
                    area: self.polygon.area()
                }).addTo(map);

                return true;
            },
            off: function() {
                self.marker.middle.off();
                markers.map(function(n) {
                    map.removeLayer(n);
                });
                markers = [];
            },
            middle: {
                handlers: {
                    dragend: function(e) {
                        var id = self.marker.find(this.options.masterMarker);

                        self.marker.add(e.target._latlng, id);
                        self.marker.middle.refresh();
                        self.polygon.set();
                    }
                },
                create: function(a, b, map) {
                    var _a = map.project(a._latlng),
                        _b = map.project(b._latlng);

                    return L.marker(map.unproject(L.point((_a.x + _b.x) / 2, (_a.y + _b.y) / 2)), {
                        middleMarker: true,
                        masterMarker: a._leaflet_id,
                        draggable: true,
                        icon: L.icon({
                            iconUrl: 'marker-middle.png',
                            iconAnchor: [5, 5]
                        })
                    }).addTo(map).on(self.marker.middle.handlers);
                },
                on: function() {
                    if (markers.length < 2) {
                        return;
                    }

                    for (var i = 1; i < markers.length; i++) {
                        self.marker.middle.create(markers[i], markers[i - 1], map);
                    }

                    if (markers.length > 2) {
                        self.marker.middle.create(markers[0], markers[markers.length - 1], map);
                    }
                },
                off: function() {
                    var layers = map._layers;

                    for (var i in layers) {
                        if (layers[i].options.middleMarker) {
                            map.removeLayer(layers[i]);
                        }
                    }
                },
                refresh: function() {
                    self.marker.middle.off();
                    self.marker.middle.on();
                }
            }
        },
        polygon: {
            color: 'F00',
            create: function(points) {
                return L.geoJson(points, {
                    style: {
                        color: '#' + self.polygon.color
                    }
                });
            },
            set: function(data) {
                if (polygon) {
                    map.removeLayer(polygon);
                }

                polygon = self.polygon.create({
                    type: 'Polygon',
                    coordinates: data ? [ data ] : [ markers.map(function(n) {
                        return [ n._latlng.lng, n._latlng.lat ];
                    }) ]
                }, self.polygon.color).addTo(map);

                self.marker.on();
            },
            get: function() {
                return polygon.getLayers()[0].feature.geometry;
            },
            area: function () {
                var latLngs = polygon.getLayers()[0]._latlngs[0],
                    pointsCount = latLngs.length,
                    area = 0.0,
                    d2r = Math.PI / 180,
                    p1, p2;

                if (pointsCount > 2) {
                    for (var i = 0; i < pointsCount; i++) {
                        p1 = latLngs[i];
                        p2 = latLngs[(i + 1) % pointsCount];
                        area += ((p2.lng - p1.lng) * d2r) * (2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
                    }
                    area = area * 6378137.0 * 6378137.0 / 2.0;
                }

                return Math.abs(area) / 1000000;
            }
        }
    };

    return self;
};
