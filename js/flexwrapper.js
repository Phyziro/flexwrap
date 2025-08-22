class flexwrap extends HTMLElement {
  static observedAttributes = ["init"];
  #schema = null;
  #xmlDoc = null;

  constructor() {
    super();
  }

  connectedCallback() {
    this.#xmlDoc = String(this.outerHTML);
    this.#schema = this.#_initialize_schema_(this.#xmlDoc);
    this.#_method_interpreter_(this.#xmlDoc,this.#schema);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(newValue === null || newValue ===""){
        return;
    }
    if(newValue ==="schema"){}else{
        throw new Error('The flexwrap primitive may only accepts the "schema" valaue on the init attribute');
        return;
    }
    
    
  }
  
  // helper functions
   #_xml_converter_(xml_document=null){
        if(xml_document===null) return;
        try{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml_document, "text/xml");
            const errorNode = xmlDoc.querySelector('parsererror');
            if (errorNode) {
              console.error('XML parsing error:', errorNode.textContent);
              return null; 
            }
            return xmlDoc;
        }catch(e){
          console.error('An unexpected error occurred during XML parsing:', e);
          return null;
        }
   }
  
   #_initialize_schema_(schema=null){
        if(schema === null){
            console.warn('Schema initialization failed: Invalid or empty schema string.');
            return null;
        } 
        
        const schemaDoc = this.#_xml_converter_(schema);
        if (!schemaDoc) {
           console.error('Schema initialization failed: XML conversion resulted in an invalid document.');
            return null;
         }
         
        const schemaElements = schemaDoc.getElementsByTagName('schema'); 
         if (!schemaElements) {
            console.warn('Schema initialization failed: No <schema> element found.');
            return null;
          }
          
        try{
            const schemaText = schemaElements[0].textContent;
            const schemaObject = JSON.parse(schemaText);
            return schemaObject;
        }catch(e){
            console.error('Schema initialization failed: Invalid JSON content.', error);
            return null;
        }
    }
    
   #_method_interpreter_(md_document=null,schema=null){
        if(md_document === null || schema === null){ 
            console.warn("No schema provided to method interpreter.");
            return;
        }
        
         const documentToProcess = this.#_xml_converter_(md_document);
          if (!documentToProcess) {
            console.error('Method interpreter failed: XML conversion error.');
            return;
          }
        
        const method_map = {
          md : (doc, method_obj, node_location, node_type)=>{
            const schemaElements = documentToProcess.getElementsByTagName(node_type);
            const schemaPresent = schemaElements.length;
            if(schemaPresent === 0){return;}
             switch(method_obj.type){
              case "render":{
                        switch(method_obj.procedure){
                            case "marked.parse":{
                            const pre_parse_string = String(schemaElements[node_location].textContent);
                            const parsed_markdown = marked.parse(pre_parse_string);
                            schemaElements[node_location].innerHTML = parsed_markdown;
                            this.#_render_(node_location,parsed_markdown,node_type);
                            }break;
                        }
              }break; 
            }   
          }
        }
         const schemaNodes = schema[0]?.nodes;
          if (!schemaNodes || schemaNodes.length === 0) {
            console.warn('No nodes to process in the provided schema.');
            return;
          }
        const custom_elements_count = schemaNodes.length;
                
        for(let i=0; i < custom_elements_count; i++){
            let elementTarget = Object.keys(schema[0].nodes[i])[0];
            let allNodes = documentToProcess.getElementsByTagName(`${elementTarget}`);
            let countNodes = allNodes.length;//count of nodes found
            for(let j=0; j<countNodes; j++){
                 method_map[elementTarget](
                 md_document, 
                 schema[0].nodes[i][elementTarget].methods[0],
                 j);
            }
        }
 
   } 
   #_render_(location=null, node=null, tag=null){
       if(location === null || node === null || tag === null){
           return;
       }
        const tags = document.getElementsByTagName(`${tag}`);
        tags[location].innerHTML = node;
   }
}
