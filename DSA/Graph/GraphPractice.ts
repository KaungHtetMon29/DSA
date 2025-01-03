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
    bst() {
      let rootNode = this.nodes[0];
      let visited: GNode[] = [];
      let queue: GNode[] = [];
      visited.push(rootNode);
      queue.push(rootNode);
      while (queue.length > 0) {
        const cNode = queue.shift()!;
        for (let node of cNode.neighbor) {
          if (!visited.some((e) => e.value === node.value)) {
            visited.push(node);
            queue.push(node);
          }
        }
      }
      const data = visited.map((e) => e.value);
      console.log(data);
    }
  }
  const graph = new Graph();
  graph.addNode("1");
  graph.addNode("2");
  graph.addNode("3");
  graph.addNode("4");
  graph.addEdge("1", "2");
  graph.addEdge("2", "3");
  graph.addEdge("2", "4");
  graph.bst();
  // console.log(graph.printGraph());
}
