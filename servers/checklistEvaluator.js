
class ChecklistEvaluator {
    constructor(rules) {
      this.rules = rules;
    }
  
    evaluateAll(data) {
      return this.rules.map(rule => ({
        ...rule,
        result: rule.evaluate(data)
      }));
    }                                
    addRule(rule) {
                        
      this.rules.push(rule);
    }
  }
  
  module.exports = ChecklistEvaluator;