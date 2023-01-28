// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import LiveEmbed from "../../classes/liveEmbed";

export default
function emptyField(this:LiveEmbed){
    this.addFields({ name: '\u200B', value: '\u200B' });
    return this;
};