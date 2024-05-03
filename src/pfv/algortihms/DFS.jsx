import { _node, isNeighbor } from "./helpers";

export function DFS(rows, cols, startnode, endnode, grid) {
    const wall_weight = 1e6;
    const visited = new Array(grid.length).fill(false);
    const Order = [];

    function dfs(node) {
        visited[node] = true;
        Order.push(node);

        if (node === endnode) {
            return true;
        }

        const R = grid[node].row;
        const C = grid[node].col;
        const iterate = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        for (const [dr, dc] of iterate) {
            const r = R + dr;
            const c = C + dc;
            if (!isNeighbor(r, c, rows, cols)) continue;
            const next = _node(r, c, cols);
            if (grid[next].Weight === wall_weight || visited[next]) continue;

            if (dfs(next)) {
                return true;
            }
        }

        // Backtrack
        Order.pop();
        return false;
    }

    dfs(startnode);
    return [Order, []];
}
