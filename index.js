const sample = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

const Page = () => {
  const [inputs, setInputs] = React.useState(sample);

  const handleChange = (e) => {
    const inputs = e.target.value;
    setInputs(inputs);
  }

  marked.setOptions({
    breaks: true
  })

  React.useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse(inputs);
  }, [inputs]);
  
  return (
    // BackGround
    <div className="min-h-screen w-screen bg-blue-300 items-center flex flex-col">
      {/* Editor */}
      <div className="bg-blue-200 h-[250px] max-w-[700px] w-[60%] my-5 flex flex-col shadow-2xl">
        {/* Title */}
        <div className="bg-blue-500 w-full h-[50px] px-5 py-2 font-extrabold text-3xl shadow-2xl">
        ✍ Editor
        </div>
        {/* TextArea */}
        <textarea
          id="editor"
          className="p-3 h-full w-full bg-blue-100 shadow-2xl"
          value={inputs}
          onChange={handleChange}
        />
      </div>

      {/* Previewer */}
      <div className="bg-blue-200 min-h-[250px] max-w-[800px] w-[80%] my-5 flex flex-col shadow-2xl">
        {/* Title */}
        <div className="bg-blue-500 w-full h-[50px] px-5 py-2 font-extrabold text-3xl shadow-2xl">
        🧐 Previewer
        </div>
        {/* Content */}
        <div id="preview" className="p-5 markdown-body shadow-2xl">
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
