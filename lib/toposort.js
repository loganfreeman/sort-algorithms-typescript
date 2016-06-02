"use strict";
function uniqueNodes(arr) {
    var res = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
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
    while (i) {
        i--;
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
            var message = 'Found unknown node. Make sure to provided all involved nodes. Unknown node: ';
            throw new Error(message + JSON.stringify(node));
        }
        if (visited[i]) {
            return;
        }
        visited[i] = true;
        var outgoing = edges.filter(function (edge) { return edge[0] === node; });
        i = outgoing.length;
        if (i) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toposort;
//# sourceMappingURL=toposort.js.map