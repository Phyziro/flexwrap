# Flexwrap

With FlexWrap you can add TailwindCss to your Markdown `.md` files revolutionizing how you present code, documentation and guides with Markdown. FlexWrap is public domain and unlicensed, meaning you'll never have to worry about licesning hindering your progress.


The `.css` file found at [tailwindcss-markdown-styling/css/markdown](https://github.com/Phyziro/tailwindcss-markdown-styling/blob/main/css/markdown) is the default Markdown `.md` styling that will be used for rendering text adherent to the Markdown syntax.

# Including the  `.md` parser external library

Simply include the Marked library from the public NPM repository within your projects header element:
```  
<head>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
```

# What a markdown file looks like using FlexWrap
```html
<md-xml init="schema">
<schema class='hidden'>
  [
  {
    "docs": "https://github.com/Phyziro/tailwindcss-markdown-styling",
    "namespace": "markdown",
    "nodes": [
      {
        "md": {"methods":[{"type":"render", "procedure":"marked.parse"}]}
      }
    ]
  }
]
</schema>

<flexwrap class="inline-flex items-center">
    <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7.375C7.5 6.33947 8.33947 5.5 9.375 5.5C10.4105 5.5 11.25 6.33947 11.25 7.375V16.625C11.25 18.489 12.761 20 14.625 20C16.489 20 18 18.489 18 16.625V11.8107L19.2197 13.0303L20.2803 11.9697L17.25 8.93934L14.2197 11.9697L15.2803 13.0303L16.5 11.8107V16.625C16.5 17.6605 15.6605 18.5 14.625 18.5C13.5895 18.5 12.75 17.6605 12.75 16.625V7.375C12.75 5.51104 11.239 4 9.375 4C7.51104 4 6 5.51104 6 7.375V9.5H4V15H9.5V9.5H7.5V7.375ZM5.5 11V13.5H8V11H5.5Z" fill="#1F2328"></path>
    </svg> 
<md>
###### Heading size `1`
</md>
</flexwrap>

<flexwrap class="relative top-2">
<md class='text-red-500'>
###### Heading size 6

> This is a blockqoute

</md>
</flexwrap>
</md-xml>
```

### Result
![FlexWrap](https://phyziro.com/assets/flexwrap-demo-preview.png)


# Contributing

If you make any improvements to the `.css` please share them via e-mail `phyziro@phyziro.com` or on our [Discord](https://discord.gg/m69dTsPmut) so that all may enjoy the updates.


