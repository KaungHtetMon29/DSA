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
    breadthFirstSearch() {
      let rootNode = this.node[0];
      let visited: Node[] = [];
      let queue: Node[] = [];
      visited.push(rootNode);
      queue.push(rootNode);
      while (queue.length > 0) {
        const currentNode = queue.shift()!;
        for (let node of currentNode.neighbor) {
          if (!visited.some((e) => e === node)) {
            visited.push(node);
            queue.push(node);
          }
        }
      }
      let data = visited.map((e) => e.value);
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

  graph.breadthFirstSearch();
  // graph.printGraph();
}
