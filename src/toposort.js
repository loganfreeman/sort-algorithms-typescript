"use strict";
function uniqueNodes(arr) {
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        if (res.indexOf(edge[0]) < 0) {
            res.push(edge[0]);
        }
        if (res.indexOf(edge[1]) < 0) {
            res.push(edge[1]);
        }
    }
    return res;
}
function sort(nodes, edges) {
    var cursor = nodes.length;
    var sorted = new Array(cursor);
    var visited = [];
    var i = cursor;
    while (i--) {
        if (!visited[i]) {
            visit(nodes[i], i, []);
        }
    }
    return sorted;
    function visit(node, i, predecessors) {
        if (predecessors.indexOf(node) >= 0) {
            throw new Error('Cyclic dependency: ' + JSON.stringify(node));
        }
        if (nodes.indexOf(node) < 0) {
            throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(node));
        }
        if (visited[i]) {
            return;
        }
        visited[i] = true;
        var outgoing = edges.filter(function (edge) { return edge[0] === node; });
        if (i = outgoing.length) {
            var preds = predecessors.concat(node);
            do {
                var child = outgoing[--i][1];
                visit(child, nodes.indexOf(child), preds);
            } while (i);
        }
        sorted[--cursor] = node;
    }
}
function toposort(edges) {
    return sort(uniqueNodes(edges), edges);
}
exports.toposort = toposort;