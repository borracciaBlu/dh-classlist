type ActionOption = {
    add?: string,
    remove?: string,
    toggle?: string
};
type NodeListLike = NodeList | Node[] | Node | EventTarget;
type OptionList = string | string[];

export declare function addClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function removeClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function toggleClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function execClass(itmList: NodeListLike, optList: ActionOption | ActionOption[]) : void;

/**
 *
 * Thunks
 *
 */
export declare function addClassThunk(itmList: NodeListLike, optList: OptionList) : () => void;

export declare function removeClassThunk(itmList: NodeListLike, optList: OptionList) : () => void;

export declare function toggleClassThunk(itmList: NodeListLike, optList: OptionList) : () => void;

export declare function execClassThunk(itmList: NodeListLike, optList: ActionOption | ActionOption[]) : () => void;
