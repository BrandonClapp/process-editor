# Process-Editor
Flow chart editor built on d3.js

[Demo](http://brandonclapp.github.io/process-editor/)

### Usage

*   **Shift + Click** anywhere on the screen (white space) to create a new node.
*   **Shift + Click + Dragging** from one node to another will create a one way connection between them.
*   **Left Clicking** on a node will select it and bring up the inspector on the right hand side, where you can change the event associated with it.
*   **Left Clicking + Dragging** on a node will reposition it.
*   Selecting a node and pressing **Delete** or **Backspace** will delete the node and any connections to and from it.
*   Similarly, selecting a connection and pressing **Delete** or **Backspace** will remove the connection.
*   **Mouse Wheel Up** and **Mouse Wheel Down** will zoom the graph accordingly.


### Saving & Opening

Charts can be saved, as well as opened, in the bottom left hand corner. Each chart is saved and opened with a .json file containing basic node and connection information.

### Installation
- Download and extract the project zip, or git clone, into a any web server directory.
