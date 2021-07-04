//import {a, br, div, img, tag, script} from 'https://raw.githubusercontent.com/kevinelong/deno_tag_objects/master/mod.ts'
import {a, br, div, img, tag, script} from './mod.ts'

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

//console.log(output.split(">").join(">\n").split("<").join("\n<"));
console.log(output);

console.assert(output === `<div id="d1" class="special"><br><a href="/"><img src="image.png"></a><br><a href="/">click me</a><fancy id="fancy">So fancy!</fancy><simple></simple><half-fancy>foo</half-fancy><other-fancy a="xyz"></other-fancy><script src="main.js"></script></div>`)