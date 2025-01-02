namespace GraphPractice {
  class GNode {
    value: any;
    neighbor: GNode[];
    constructor(value: any) {
      this.value = value;
      this.neighbor = [];
    }
    addNeighbor(value: GNode) {
      this.neighbor.push(value);
    }
  }
  class Graph {
    nodes: GNode[];
    constructor() {
      this.nodes = [];
    }
    addNode(value: any) {
      const newNode = new GNode(value);
      this.nodes.push(newNode);
    }
    addEdge(source: any, destination: any) {
      const sourceNode =
        this.nodes[this.nodes.findIndex((e) => e.value === source)];
      const destinationNode =
        this.nodes[this.nodes.findIndex((e) => e.value === destination)];
      if (sourceNode && destinationNode) {
        sourceNode.addNeighbor(destinationNode);
        destinationNode.addNeighbor(sourceNode);
      }
    }
    printGraph() {
      let output: Record<string, any> = {};
      this.nodes.map((e) => (output[e.value] = e.neighbor));
      return output;
    }
  }
  const graph = new Graph();
  graph.addNode("1");
  graph.addNode("2");
  graph.addNode("3");
  graph.addNode("4");
  graph.addEdge("1", "2");
  console.log(graph.printGraph());
}
