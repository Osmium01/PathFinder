import { _node } from "./helpers";

export function GameOfLife(grid, rows, cols) {
    const wall_weight = 1e6;
    const iterate = [1, 0, -1];
    let new_grid = grid.slice();

    const countAliveNeighbors = (node) => {
        let res = 0;
        const { row, col } = grid[node];
        for (let dr of iterate) {
            for (let dc of iterate) {
                if (dr === 0 && dc === 0) continue;
                let r = (row + dr + rows) % rows;
                let c = (col + dc + cols) % cols;
                let idx = _node(r, c, cols);
                if (new_grid[idx].Weight === wall_weight) {
                    res++;
                }
            }
        }
        return res;
    }

    const Alive = (node, count) => {
        const { Weight } = grid[node];
        switch (true) {
            case (Weight === wall_weight && (count === 2 || count === 3)):
                return wall_weight;
            case (Weight === 1 && count === 3):
                return wall_weight;
            default:
                return 1;
        }
    }

    for (let node = 0; node < grid.length; node++) {
        let count = countAliveNeighbors(node);
        new_grid[node].Weight = Alive(node, count);
    }

    return new_grid;
}
