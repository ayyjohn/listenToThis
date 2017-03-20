import { values } from 'lodash';

export const selectMP3s = tracks => tracks.map( track => track.mp3_file_url);
