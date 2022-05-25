export const w = 1;
export const h = w * 0.5;
const end = 5;

export const verticals = [
  // y axis lines left to right
  {
    start: {
      x: -0.42,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: -0.42,
      y: 1,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.29,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: -0.29,
      y: 1.33,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.165,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: -0.165,
      y: 1,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.165,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: 0.165,
      y: 1,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.42,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: 0.42,
      y: 1.25,
      z: -0.5
    }
  },
  // x axis lines top to bottom
  {
    start: {
      x: -0.5,
      y: 1.58,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 1.58,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1.5,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 1.5,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 1.33,
      z: -0.5
    },
    end: {
      x: 0.165,
      y: 1.33,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1.33,
      z: -0.5
    },
    end: {
      x: -0.165,
      y: 1.33,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.165,
      y: 1.25,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 1.25,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1.08,
      z: -0.5
    },
    end: {
      x: -0.165,
      y: 1.08,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 1.08,
      z: -0.5
    },
    end: {
      x: 0.165,
      y: 1.08,
      z: -0.5
    }
  }
];

export const horizontals = [
  // z axis lines left to right
  {
    start: {
      x: -0.5,
      y: 1,
      z: -0.5
    },
    end: {
      x: -0.5,
      y: 1,
      z: 0.5
    }
  },
  {
    start: {
      x: -0.4,
      y: 1,
      z: -0.33
    },
    end: {
      x: -0.4,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: -0.25,
      y: 1,
      z: -0
    },
    end: {
      x: -0.25,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: -0.33
    },
    end: {
      x: -0.165,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: 0,
      y: 1,
      z: 0.165
    },
    end: {
      x: 0,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: 0.165,
      y: 1,
      z: -0.165
    },
    end: {
      x: 0.165,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: 0.25,
      y: 1,
      z: -0.165
    },
    end: {
      x: 0.25,
      y: 1,
      z: 0
    }
  },
  {
    start: {
      x: 0.4,
      y: 1,
      z: -0.33
    },
    end: {
      x: 0.4,
      y: 1,
      z: 0
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 1,
      z: 0.5
    }
  },
  // x axis lines top to bottom
  {
    start: {
      x: -0.5,
      y: 1,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 1,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.33
    },
    end: {
      x: -0.5,
      y: 1,
      z: -0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.165
    },
    end: {
      x: -0.165,
      y: 1,
      z: -0.165
    }
  },
  {
    start: {
      x: 0.4,
      y: 1,
      z: -0.08
    },
    end: {
      x: 0.165,
      y: 1,
      z: -0.08
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: -0.08
    },
    end: {
      x: -0.5,
      y: 1,
      z: -0.08
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0
    },
    end: {
      x: 0.165,
      y: 1,
      z: -0
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: -0
    },
    end: {
      x: -0.5,
      y: 1,
      z: -0
    }
  },
  {
    start: {
      x: 0.165,
      y: 1,
      z: 0.165
    },
    end: {
      x: -0.4,
      y: 1,
      z: 0.165
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: 0.25
    },
    end: {
      x: -0.5,
      y: 1,
      z: 0.25
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0.33
    },
    end: {
      x: 0.5,
      y: 1,
      z: 0.33
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0.5
    },
    end: {
      x: 0.5,
      y: 1,
      z: 0.5
    }
  }
];

export const sides = [
  // y axis lines left to right
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0.5
    },
    end: {
      x: -0.5,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: 0.5
    },
    end: {
      x: -0.165,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: 0.165,
      y: 1,
      z: 0.5
    },
    end: {
      x: 0.165,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: 0.5
    },
    end: {
      x: 0.5,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: 0.33
    },
    end: {
      x: 0.5,
      y: 0,
      z: 0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: 0
    },
    end: {
      x: 0.5,
      y: 0,
      z: 0
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.165
    },
    end: {
      x: 0.5,
      y: 0,
      z: -0.165
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.33
    },
    end: {
      x: 0.5,
      y: 0,
      z: -0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: 0.4,
      y: 1,
      z: -0.5
    },
    end: {
      x: 0.4,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: 0,
      y: 1,
      z: -0.5
    },
    end: {
      x: 0,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.165,
      y: 1,
      z: -0.5
    },
    end: {
      x: -0.165,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.4,
      y: 1,
      z: -0.5
    },
    end: {
      x: -0.4,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: -0.5
    },
    end: {
      x: -0.5,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: -0.08
    },
    end: {
      x: -0.5,
      y: 0,
      z: -0.08
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0.25
    },
    end: {
      x: -0.5,
      y: 0,
      z: 0.25
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0.33
    },
    end: {
      x: -0.5,
      y: 0,
      z: 0.33
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: -0.33
    },
    end: {
      x: -0.5,
      y: 0,
      z: -0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 1,
      z: 0.5
    },
    end: {
      x: 0.5,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 1,
      z: 0
    },
    end: {
      x: -0.5,
      y: 0,
      z: 0
    }
  }
];

export const floors = [
  // x,z axis lines left to right
  {
    start: {
      x: -0.5,
      y: 0,
      z: 0.5
    },
    end: {
      x: -end,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: -0.165,
      y: 0,
      z: 0.5
    },
    end: {
      x: -0.165,
      y: 0,
      z: end
    }
  },
  {
    start: {
      x: 0.165,
      y: 0,
      z: 0.5
    },
    end: {
      x: 0.165,
      y: 0,
      z: end
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: 0.5
    },
    end: {
      x: end,
      y: 0,
      z: 0.5
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: 0.33
    },
    end: {
      x: end,
      y: 0,
      z: 0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: 0
    },
    end: {
      x: end,
      y: 0,
      z: 0
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: -0.165
    },
    end: {
      x: end,
      y: 0,
      z: -0.165
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: -0.33
    },
    end: {
      x: end,
      y: 0,
      z: -0.33
    }
  },
  {
    start: {
      x: 0.5,
      y: 0,
      z: -0.5
    },
    end: {
      x: 0.5,
      y: 0,
      z: -end
    }
  },
  {
    start: {
      x: 0.4,
      y: 0,
      z: -0.5
    },
    end: {
      x: 0.4,
      y: 0,
      z: -end
    }
  },
  {
    start: {
      x: 0,
      y: 0,
      z: -0.5
    },
    end: {
      x: 0,
      y: 0,
      z: -end
    }
  },
  {
    start: {
      x: -0.165,
      y: 0,
      z: -0.5
    },
    end: {
      x: -0.165,
      y: 0,
      z: -end
    }
  },
  {
    start: {
      x: -0.4,
      y: 0,
      z: -0.5
    },
    end: {
      x: -0.4,
      y: 0,
      z: -end
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: -0.5
    },
    end: {
      x: -end,
      y: 0,
      z: -0.5
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: -0.33
    },
    end: {
      x: -end,
      y: 0,
      z: -0.33
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: -0.08
    },
    end: {
      x: -end,
      y: 0,
      z: -0.08
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: -0
    },
    end: {
      x: -end,
      y: 0,
      z: -0
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: 0.25
    },
    end: {
      x: -end,
      y: 0,
      z: 0.25
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: 0.33
    },
    end: {
      x: -end,
      y: 0,
      z: 0.33
    }
  },
  {
    start: {
      x: -0.5,
      y: 0,
      z: 0
    },
    end: {
      x: -end,
      y: 0,
      z: 0
    }
  }
];
