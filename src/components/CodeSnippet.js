// thanks to Abdul Haseeb for reference on using highlight.js
// https://medium.com/@abdulhaseeb13mar/show-code-snippets-in-react-js-479907cf6ae
import * as React from "react";
import "../assets/css/main.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import glsl from "highlight.js/lib/languages/glsl";
import "highlight.js/styles/atom-one-dark.css";

import { useEffect, useRef } from "react";

hljs.registerLanguage("glsl", glsl);

export default function CodeSnippet() {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);
  return (
    <pre>
      <code className="glsl" ref={codeRef}>
        {`
// from Heartbeast - https://www.youtube.com/watch?v=-PJOHAsBcoI&t=168s

shader_type canvas_item;

uniform bool active = true;
uniform float amount = 1.0;
uniform sampler2D offset_tex : hint_default_white;

// editor color picker
//uniform vec4 color : hint_color = vec4(1.0,1.0,1.0,1.0);

void fragment() {
	// the source's color per uv on texture
	vec4 texture_color = texture(TEXTURE, UV);
//	vec4 color = vec4(1.0,1.0,1.0,1.0);
	vec4 color = texture_color;
	
	if(active)
	{
		// mult amount by offset tex, so darker areas have less offset
		float adjusted_amt = amount * texture(offset_tex, UV).r / 100.0;
		color.r = texture(TEXTURE, vec2(UV.x + adjusted_amt, UV.y)).r;
		color.g = texture(TEXTURE, UV).g;
		color.b = texture(TEXTURE, vec2(UV.x - adjusted_amt, UV.y)).b;
	}
	COLOR = color;
}`}
      </code>
    </pre>
  );
}
