// Task scheduling
const schedules = [
    {"id": "a", "dependency": ["b", "c"]},
    {"id": "b", "dependency": ["d"]},
    {"id": "c", "dependency": ["e"]},
    {"id": "d", "dependency": []},
    {"id": "e", "dependency": ["f"]},
    {"id": "f", "dependency": []},
]