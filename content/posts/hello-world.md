+++
title = "Hello, world"
date = 2026-10-10
draft = false
tags = ["meta", "pwn"]
summary = "A first post to check that the pipeline works: code highlighting, math, tags, and search."
+++

This is the first post. It exists to verify the pipeline end to end: syntax
highlighting with a copy button, server-side rendered math, tags, and search.

## Code

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char buf[32];
    puts("give me input:");
    gets(buf);          /* the classic */
    printf("hello %s\n", buf);
    return 0;
}
```

## Math

Inline math like $E = mc^2$ and a display equation:

$$
p(\text{win}) = \frac{\text{theoretical}}{\text{real}} \approx 0
$$

## Tags

This post is tagged `meta` and `pwn`, so it should show up under both tag pages.
