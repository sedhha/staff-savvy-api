const meta = {
  type: 'problem',
  hasSuggestions: false,
  fixable: false,
};

function create(context) {
  const variablesToCheck = context.options[0] || [];
  return {
    Identifier(node) {
      if (node.name === 'env') {
        if(node && node.parent && node.parent.object && node.parent.parent && node.parent.parent.property) {
          if (node.parent.object.name === 'process' && variablesToCheck.includes(node.parent.parent.property.name)) {
            context.report({ node, message: `Usage of '${node.parent.parent.property.name}' is not allowed.` });
          }
        }
        
      }
    },
  };
}
module.exports = { meta, create };
