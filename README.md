# Markdown Styling for TailwindCss projects

This project is an unlicensed, public domain project.


The `.css` file found [tailwindcss-markdown-styling/css/markdown](https://github.com/Phyziro/tailwindcss-markdown-styling/blob/main/css/markdown) when included will applying styling to synchronous and asynchronously generated `.md` text.

## How to parse an `.md` file using an external library

Simply include the Marked library from the public NPM repository within your projects header element:
```  
<head>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
 ```

## How to ue the `.md` file library to parse the `.md` file

```Javascript
// Vanilla JS
const _MarkdownDisplayContainer_ = document.getElementById('your-markdown-display-container');

async function TemplateFetch(
  url=null,
  method=0,
  content_type=0,
  body:2
){
  if(url === null) return;
    try{
      const _Data_ = fetch(
        url,
        {
          method:{
              selected:['GET', 'POST'][Number(http_method)]
          }.selected,
          headers:{
            'Content-Type' : {
                  selected:['text/plain', 'application/json'][Number(content_type)]
              }.selected,
          },
          body: {
                  selected: [JSON.stringify(http_body), http_body, null][Number(body_type)]
                }.selected
        }
      );
      if (!_Data_.ok) {
                throw new Error(`HTTP error! status: ${_Data_.status}`);
      }
     // Obtain the markdown .md content
     return await _Data_.text();
    }
}catch(error){/*...*/}

// Use the libraries built-in method `marked.parse()` to convert the plain/text into .md format
// this is done by adding html tags relative to the .md syntax, which is handld by the Marked library
_MarkdownDisplayContainer_.innerHTML = await marked.parse(TemplateFetch(`location/of/markdown.md`,1));

```

Once the markdown has been parsed by the Marked library, the `.css` styling will be applied dynamically.

# Contributing

If you make any improvements to the `.css` please share them via e-mail `phyziro@phyziro.com` or on our [Discord](https://discord.gg/m69dTsPmut) so that all may enjoy the updates.


