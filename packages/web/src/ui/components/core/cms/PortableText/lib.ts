// TODO: Create proper types for blocks and block children specifically
export const portableBlockToPlainText = (blocks: any[] = []) => {
    return (
        blocks
            // loop through each block
            .map((block) => {
                // if it's not a text block with children,
                // return nothing
                if (block._type !== 'block' || !block.children) {
                    return '';
                }
                // loop through the children spans, and join the
                // text strings
                return block.children.map((child: any) => child.text).join('');
            })
            // join the paragraphs leaving split by two linebreaks
            .join('\n\n')
    );
};
