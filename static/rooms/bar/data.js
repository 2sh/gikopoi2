export default ({
    "offset": [1, 1],
    "grid": [9, 9],
    "background": "background.png",
    "background_size": [1442, 1022],
    "objects": [
        [[2, 1], "table.png"],
        [[2, 2], "table.png"],

        [[6, 1], "table.png"],
        [[6, 2], "table.png"],

        [[2, 5], "counter_bottom_left.png"],
        [[3, 5], "counter_bottom.png"],
        [[4, 5], "counter_bottom.png"],
        [[5, 5], "counter_bottom.png"],
        [[6, 5], "counter_bottom_right.png"],

        [[2, 6], "counter_left.png"],
        [[2, 7], "counter_left.png"],

        [[6, 6], "counter_right.png"],
        [[6, 7], "counter_right.png"]
    ],
    "sit": [
        [1, 1],
        [1, 2],

        [3, 1],
        [3, 2],

        [5, 1],
        [5, 2],

        [7, 1],
        [7, 2],

        [1, 5],
        [1, 6],
        [1, 7],

        [2, 4],
        [3, 4],
        [4, 4],
        [5, 4],
        [6, 4],

        [7, 5],
        [7, 6],
        [7, 7]
    ],

    "blocked": [
        [2, 1],
        [2, 2],

        [6, 1],
        [6, 2],

        [2, 5],
        [3, 5],
        [4, 5],
        [5, 5],
        [6, 5],

        [2, 6],
        [2, 7],

        [6, 6],
        [6, 7],

        [1, 8],
        [2, 8],
        [3, 8],
        [4, 8],
        [5, 8],
        [6, 8],
        [7, 8]
    ],
    "doors": [
        [[0, 0], "bar_street", [1, 7], 1],
        [[3, 7], "underground", [0, 2], 1],
        [[8, 4], "bar_street", [3, 5], 1]
    ]
});