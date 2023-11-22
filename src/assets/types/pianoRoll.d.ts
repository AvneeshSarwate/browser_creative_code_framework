type NoteInfo = {
    pitch: number;
    position: number;
    duration: number;
};
type MouseMoveRoot = {
    mouseX: number;
    mouseY: number;
    svgX: number;
    svgY: number;
    vbX: number;
    vbY: number;
    vbWidth: number;
    vbHeight: number;
    zoom: number;
};
type Box = {
    tl: {
        x: number;
        y: number;
    };
    br: {
        x: number;
        y: number;
    };
};
export declare class PianoRoll {
    private svgRoot;
    noteModStartReference: {
        [key: string]: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    };
    private notes;
    private spatialNoteTracker;
    private selectedElements;
    selectedNoteIds: string[];
    selectRect: any;
    cursorElement: any;
    cursorPosition: number;
    cursorWidth: number;
    playCursorElement: any;
    private backgroundElements;
    quarterNoteWidth: number;
    noteHeight: number;
    handleRad: number;
    whiteNotes: number[];
    noteSubDivision: number;
    timeSignature: number;
    numMeasures: number;
    sectionColoringDivision: number;
    NUM_MIDI_NOTES: number;
    xSnap: number;
    ySnap: any;
    backgroundColor1: string;
    backgroundColor2: string;
    noteColor: string;
    selectedNoteColor: string;
    thickLineWidth: number;
    thinLineWidth: number;
    viewportHeight: number;
    viewportWidth: number;
    maxZoom: any;
    noteCount: number;
    refPt: DOMPoint;
    shiftKeyDown: boolean;
    historyList: NoteInfo[][];
    historyListIndex: number;
    pianoRollHeight: number;
    pianoRollWidth: number;
    pitchStrings: string[];
    textDev: number;
    mouseScrollActive: boolean;
    mouseZoomActive: boolean;
    mouseMoveRootNeedsReset: boolean;
    mouseMoveRoot: MouseMoveRoot;
    nonSelectedModifiedNotes: Set<string>;
    count: number;
    draggingActive: boolean;
    quantDragActivated: boolean;
    private dragTarget?;
    resizingActive: boolean;
    quantResizingActivated: boolean;
    private resizeTarget?;
    private rawSVGElementToWrapper;
    copiedNoteBuffer: NoteInfo[];
    containerElement: HTMLElement | null;
    containerElementId: any;
    temporaryMouseMoveHandler?: (event: MouseEvent) => void;
    mousePosition: {
        x: number;
        y: number;
    };
    playHandler: any;
    noteOnOffHandler: any;
    wIsDown: any;
    private debugCircle0;
    private debugCircle1;
    constructor(containerElementId: string, playHandler: () => void, noteOnOffHandler: () => void);
    drawBackgroundAndCursor(): void;
    addNote(pitch: number, position: number, duration: number, avoidHistoryManipulation?: boolean): string;
    private deleteElement;
    private deleteElements;
    getNoteData(): {
        pitch: number;
        position: number;
        duration: number;
    }[];
    setNoteData(noteData: NoteInfo[]): void;
    setViewportToShowAllNotes(): void;
    private updateNoteInfo;
    private updateNoteInfoMultiple;
    private updateNoteElement;
    private updateNoteElemScreenCoords;
    svgMouseCoord(evt: MouseEvent): DOMPoint;
    svgYtoPitch(yVal: number): number;
    svgXtoPosition(xVal: number): number;
    svgXYtoPitchPos(xVal: number, yVal: number): {
        pitch: number;
        position: number;
    };
    svgXYtoPitchPosQuant(xVal: number, yVal: number): {
        pitch: number;
        position: number;
    };
    getMouseDelta(event: MouseEvent, root: MouseMoveRoot): {
        x: number;
        y: number;
    };
    resetMouseMoveRoot(event: MouseEvent): void;
    mouseScrollHandler(event: MouseEvent): void;
    mouseZoomHandler(event: MouseEvent): void;
    keydownHandler(event: KeyboardEvent): void;
    keyupHandler(event: KeyboardEvent): void;
    copyNotes(): void;
    pasteNotes(): void;
    shiftNotesPitch(shiftAmount: number): void;
    shiftNotesTime(shiftAmount: number): void;
    snapshotNoteState(): void;
    executeUndo(): void;
    executeRedo(): void;
    restoreNoteState(histIndex: number): void;
    midiPitchToPitchString(pitch: number): string;
    svgYToPitchString(yVal: number): string;
    refreshNoteModStartReference(noteIds: string[]): void;
    private getNotesAtPosition;
    private checkIfNoteMovedSignificantly;
    private checkIfNoteResizedSignificantly;
    private initializeNoteModificationAction;
    updateNoteStateOnModificationCompletion(): void;
    endSelect(): void;
    endDrag(): void;
    endResize(): void;
    startDragSelection(dragStart: DOMPoint): void;
    private attachHandlersOnBackground;
    populateSpatialNoteTracker(): void;
    executeOverlapVisibleChanges(): void;
    setDifference<T>(setA: Set<T>, setB: Set<T>): Set<T>;
    isDragOutOfBounds(): void;
    isResizeOutOfBounds(): void;
    private attachHandlersOnNote;
    private selectNote;
    private deselectNote;
    private selectRectIntersection;
    boxIntersect(noteBox: Box, selectBox: Box): boolean;
    clearNoteSelection(): void;
}
export {};
