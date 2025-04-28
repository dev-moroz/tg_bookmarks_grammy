interface ParsedForward {
    senderName: string | null;
    postUrl:    string | null;
    mediaUrls:  string[];
    text:       string | null;
}

interface Result {
    senderName: string | null;
    postUrl: string | null;
    mediaUrls: string[];
    text: string | null;
}

type AlbumRecord = {
    items:   ParsedForward;
    timer:   NodeJS.Timeout;
    promise: Promise<ParsedForward>;
    resolve: (items: ParsedForward) => void;
};

export {ParsedForward, Result, AlbumRecord}