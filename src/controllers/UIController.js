import AttackTreeController from "./AttackTreeController";
let attackTreeController = new AttackTreeController();

export default class UIController {

  getInputtedText() {
    const attackTreeController = new AttackTreeController();
    const success = attackTreeController.parseInput(Window.map.getTextAreaValue());
    return success;
  }

  genScenarios() {
    attackTreeController.showScenario();
  }

  getImportedFile(text) {
    Window.map.setTextAreaValue(text);
  }

  highlightTree(treeData, path) {
    if (path.includes(treeData["ID"])) {
      treeData["highlight"] = true;
    }
    if (treeData.children !== undefined && treeData.children.length > 0) {
      for (var i = 0; i < treeData.children.length; i++) {
        treeData.children[i] = this.highlightTree(treeData.children[i], path);
      }
    }
    return JSON.parse(JSON.stringify(treeData));
  }
}
