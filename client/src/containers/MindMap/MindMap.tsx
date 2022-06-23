import React, {useCallback, useEffect, useState, MouseEvent as ReactMouseEvent} from 'react';
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    Edge,
    Node,
    MiniMap, NodeChange, EdgeChange, updateEdge, Connection
} from "react-flow-renderer";
import NodeCard from '../../components/MindMap/Node'
import CreateNode from "../../blocks/MindMap/CreateNode";
import ControlNode from "../../blocks/MindMap/ControlNode";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useSession} from "next-auth/react";
import {
    deleteMindCard,
    getMindMap,
    patchMindCardCoord,
    postMindCard,
    putMindCard
} from "../../redux/actions/MindMapAction";
import {convertMindCard} from "../../helpers/functions";


const initialNodes: Node[] = [
    {
        id: '1',
        type: 'nodeCard',
        data: {
            id: '1',
            label: 'Hello World',
            description: 'Нужно просто взять и сделать этот ваш гребаный сайт и забыть про эту фигню как страшный сон.',
            type: 'source',
        },
        position: {x: 250, y: 550},
    },
    {
        id: '2',
        type: 'nodeCard',
        data: {
            id: '2',
            label: 'Hello World 2',
            description: '',
            type: 'target',

        },
        position: {x: 450, y: 350},
    },
    {
        id: '3',
        type: 'nodeCard',
        data: {
            id: '3',
            label: 'Hello World 3',
            description: 'Нужно просто взять и сделать этот ваш гребаный сайт и забыть про эту фигню как страшный сон.',
            type: 'default'
        },
        position: {x: 450, y: 150},
    },
];

const nodeCard = {nodeCard: NodeCard};

const initialEdges: Edge[] = [
    {id: 'e1-2', source: '1', target: '3'},

];


const MindMap = () => {

    const dispatch = useAppDispatch();
    const {data: session} = useSession()
    const router = useRouter();

    const {mindmap} = useAppSelector(state => state.mindmapSlice);

    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const [node, setNode] = useState<Node | null>(null)

    const handleAddNode = (data: Node) => {
        setNodes((nds) => nds.concat(data))
    }

    const handleOnNodeChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds: any) =>
            applyNodeChanges(changes, nds)),
        [setNodes]
    );


    const handleOnEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) =>
            applyEdgeChanges(changes, eds)),
        [setEdges]
    )

    const handleOnEdgeUpdate = (oldEdge: Edge<any>, newConnection: Connection) =>
        setEdges((els) => updateEdge(oldEdge, newConnection, els))

    // const handleOnConnect = useCallback(
    //     (connection) => setEdges((eds) =>
    //         addEdge({...connection, animated: true}, eds)),
    //     [setEdges]
    //
    // )

    const handleOnConnect = (connection: any) => {
        // @ts-ignore
        setEdges((eds) => addEdge({...connection, animated: true}, eds));
    }

    const handleOnLookData = (_: ReactMouseEvent, data: Node) => {
        setNode(data)
    }


    useEffect(() => {
        console.log(edges)
    }, [edges])

    const handleOnNode = (action: { type: "LOOK" | "EDIT" | "DELETE" | "DEFAULT" | "CREATE", payload: Node }) => {
        const {type, payload} = action;
        //@ts-ignore
        const token: string = session?.accessToken;
        const mindID = router.query.mindmap;

        const deleteEdges = () => {
            let newEdges: Edge[] = JSON.parse(JSON.stringify(edges));
            newEdges = newEdges.filter((edge: Edge) => edge.target !== payload.id && edge.source !== payload.id);
            setEdges(newEdges);
        }

        switch (type) {
            case "CREATE": {
                // @ts-ignore
                dispatch(postMindCard({token, id: mindID, data: convertMindCard(payload)}))
                //setNodes((nds) => nds.concat(payload))
                break;
            }
            case "EDIT": {
                dispatch(putMindCard({token, id: +payload.data.id, data: convertMindCard(payload)}))
                // @ts-ignore
                nodes.map((node: Node) => node.id === payload.id ? node.data.type !== payload.data.type ? deleteEdges() : '' : '');
                break;
            }
            case "DELETE": {
                dispatch(deleteMindCard({token, id: +payload.data.id}))
                // let newNodes: Node[] = JSON.parse(JSON.stringify(nodes));
                // newNodes = newNodes.filter((node: Node) => node.id !== payload.id);
                // setNodes(newNodes);
                // deleteEdges()
                break;
            }
            default : {
                break;
            }
        }
    }


    const handleOnNodeDragStop = (event: ReactMouseEvent, node: Node) => {
        //@ts-ignore
        const token: string = session?.accessToken;
        const mindID = router.query.mindmap;
        const data = {
            card: +node.id,
            x: node.position.x,
            y: node.position.y
        }
        // @ts-ignore
        dispatch(patchMindCardCoord({token, id: mindID, data}))
        console.log(node)
    }


    const handleOnEdgeDelete = (edges: Edge[]) => {
        console.log(edges)
    }


    useEffect(() => {
        //@ts-ignore
        const token: string = session?.accessToken;
        if (!router.isReady) return;
        // @ts-ignore
        dispatch(getMindMap({token, id: router.query.mindmap}))
    }, [dispatch])


    useEffect(() => {
        if (mindmap) {
            setNodes(mindmap.nodes);
            setEdges(mindmap.edges);
        }
    }, [mindmap])

    useEffect(() => {
        console.log(edges)
    }, [edges])


    return (
        <>
            <ReactFlow
                className={`flex-grow-1`}
                nodes={nodes}
                edges={edges}
                onNodesChange={handleOnNodeChange}
                onEdgesChange={handleOnEdgesChange}
                onConnect={handleOnConnect}
                onEdgeUpdate={handleOnEdgeUpdate}
                onNodeDragStop={handleOnNodeDragStop}
                nodeTypes={nodeCard}
                onEdgesDelete={handleOnEdgeDelete}
                onNodeClick={handleOnLookData}
                fitView>
                <div style={{
                    'position': 'absolute',
                    'top': '10px',
                    'zIndex': '5',
                    'right': '10px'
                }}>
                    <CreateNode onNode={handleOnNode}/>
                </div>
                <MiniMap nodeColor={(n: Node<any>) => {
                    if (n.data.type === 'target') return '#868974FF';
                    if (n.data.type === 'source') return '#F0B878FF';
                    if (n.data.type === 'default') return '#dcdcdc';
                    return '#fff';

                }}/>
                <Controls/>
                <Background color={`#aaa`} gap={10}/>
            </ReactFlow>
            <ControlNode data={node} onNode={handleOnNode}/>
        </>
    );
};

export default MindMap;