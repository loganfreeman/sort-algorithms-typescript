function uniqueNodes(arr: any) {
    let res: any[] = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let edge: any = arr[i]
        if (res.indexOf(edge[0]) < 0) { res.push(edge[0]) }
        if (res.indexOf(edge[1]) < 0) { res.push(edge[1]) }
    }
    return res
}

function sort(nodes: any[], edges: any[]) {
    let cursor = nodes.length
    let sorted = new Array(cursor) // result array
    let visited: any[] = []
    let i = cursor

    while (i) {
        i--
        if (!visited[i]) {
            visit(nodes[i], i, [])
        }
    }

    return sorted

    function visit(node: any[], i: number, predecessors: any[]) {
        if (predecessors.indexOf(node) >= 0) {
            throw new Error('Cyclic dependency: ' + JSON.stringify(node))
        }

        if (nodes.indexOf(node) < 0) {
            let message = 'Found unknown node. Make sure to provided all involved nodes. Unknown node: '
            throw new Error(message + JSON.stringify(node))
        }

        if (visited[i]) { return }
        visited[i] = true

        // outgoing edges
        let outgoing = edges.filter((edge: any) => edge[0] === node)

        i = outgoing.length
        if (i) {
            let preds = predecessors.concat(node)
            do {
                let child = outgoing[--i][1]
                visit(child, nodes.indexOf(child), preds)
            } while (i)
        }

        sorted[--cursor] = node
    }
}

export default function toposort(edges: any[]) {
    return sort(uniqueNodes(edges), edges)
}
