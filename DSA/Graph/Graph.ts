namespace GraphSample {
  class Node {
    value: string;
    neighbor: Node[];
    constructor(value: any) {
      this.neighbor = [];
      this.value = value;
    }
    addNeighbor(node: Node) {
      this.neighbor.push(node);
    }
  }
  class Graph {
    node: Node[];
    constructor() {
      this.node = [];
    }
    addNode(value: string) {
      const node = new Node(value);
      this.node.push(node);
    }
    addEdge(source: string, destination: string) {
      const sourceNode = this.node.find((e) => e.value === source);
      const destinationNode = this.node.find((e) => e.value === destination);
      if (sourceNode && destinationNode) {
        sourceNode.addNeighbor(destinationNode);
        destinationNode.addNeighbor(sourceNode);
      }
    }
    printGraph() {
      let buffer: Record<string, any> = {};
      for (let i = 0; i < this.node.length; i++) {
        buffer[this.node[i].value] = this.node[i].neighbor;
      }
      console.log(buffer);
    }
  }
  const graph = new Graph();
  graph.addNode("1");
  graph.addNode("2");
  graph.addNode("3");
  graph.addNode("4");
  graph.addEdge("1", "2");
  graph.printGraph();
}
