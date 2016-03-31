/**
 * @file check audio formt
 * @author hushicai(bluthcy@gmail.com)
 */

function canPlay(format) {
    var audio = document.createElement('audio');
    var mimeType;
    switch (format) {
        case 'mp3':
            mimeType = 'audio/mpeg;';
            break;
            // ogg vorbis
        case 'vorbis':
            mimeType = 'audio/ogg; codecs="vorbis"';
            break;
            // ogg opus
        case 'opus':
            mimeType = 'audio/ogg; codecs="opus"';
            break;
        case 'webm':
            mimeType = 'audio/webm; codecs="vorbis"';
            break;
        case 'mp4':
            mimeType = 'audio/mp4; codecs="mp4a.40.5"';
            break;
        case 'wav':
            mimeType = 'audio/wav; codecs="1"';
            break;
        default:
    }
    if (mimeType !== undefined && audio.canPlayType) {
        return audio.canPlayType(mimeType) !== '';
    }
    return false;
}

module.exports = canPlay;

