namespace GraphSample2 {
  class Node {
    value: any;
    neighbor: Node[];
    constructor(value: any) {
      this.value = value;
      this.neighbor = [];
    }

    addNeighbor(input: Node) {
      this.neighbor.push(input);
    }
  }
  class Graph {
    graph: Node[];
    constructor() {
      this.graph = [];
    }
    addNode(value: any) {
      const newNode = new Node(value);
      this.graph.push(newNode);
    }

    addEdge(source: any, destination: any) {
      const sourceNode =
        this.graph[this.graph.findIndex((e) => e.value === source)];
      const destNode =
        this.graph[this.graph.findIndex((e) => e.value === destination)];
      if (sourceNode && destNode) {
        sourceNode.addNeighbor(destNode);
        destNode.addNeighbor(sourceNode);
      }
    }
    bsf() {
      let pivotNode = this.graph[0];
      let queue: Node[] = [];
      let visited: Node[] = [];
      queue.push(pivotNode);
      visited.push(pivotNode);
      while (queue.length > 0) {
        const currentNode = queue.shift()!;
        for (let node of currentNode.neighbor) {
          if (!visited.some((e) => e.value === node.value)) {
            queue.push(node);
            visited.push(node);
          }
        }
      }
      const data = visited.map((e) => e.value);
      console.log(data);
    }
  }
  const sampleGraph = new Graph();
  sampleGraph.addNode("1");
  sampleGraph.addNode("2");
  sampleGraph.addNode("3");
  sampleGraph.addNode("4");
  sampleGraph.addNode("5");
  sampleGraph.addEdge("1", "2");
  sampleGraph.addEdge("1", "3");
  sampleGraph.addEdge("2", "4");
  sampleGraph.addEdge("2", "5");
  //   console.log(sampleGraph.graph);
  sampleGraph.bsf();
}
