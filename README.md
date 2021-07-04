# deno_tag_objects
HTML TAG ELEMENTS FOR DENO

CODE EXAMPLE:
```
import {a, br, div, img, tag, script} from 'https://raw.githubusercontent.com/kevinelong/deno_tag_objects/master/mod.ts'

const output = div({
    attrs: {id: 'd1', class: 'special'}, content: [
        br(),
        a("/", [img("image.png")]),
        br(),
        a("/", "click me"),
        tag("fancy", {attrs: {id: 'fancy'}, content: ["So fancy!"]}),
        tag("simple"),
        tag("half-fancy", {content: ["foo"]}),
        tag("other-fancy", {attrs: {a: "xyz"}}),
        script("main.js")
    ]
});

console.log(output);

```
