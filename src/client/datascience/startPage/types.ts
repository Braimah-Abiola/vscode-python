import { SharedMessages } from '../messages';

export const IStartPage = Symbol('IStartPage');
export interface IStartPage {
    open(): Promise<void>;
}

export interface IReleaseNotesPackage {
    date: string;
    notes: string[];
}

export namespace StartPageMessages {
    export const Started = SharedMessages.Started;
    export const UpdateSettings = SharedMessages.UpdateSettings;
    export const RequestReleaseNotes = 'RequestReleaseNotes';
    export const SendReleaseNotes = 'SendReleaseNotes';
    export const OpenBlankNotebook = 'OpenBlankNotebook';
    export const OpenBlankPythonFile = 'OpenBlankPythonFile';
    export const OpenInteractiveWindow = 'OpenInteractiveWindow';
    export const OpenCommandPalette = 'OpenCommandPalette';
    export const OpenCommandPaletteWithOpenNBSelected = 'OpenCommandPaletteWithOpenNBSelected';
    export const OpenSampleNotebook = 'OpenSampleNotebook';
    export const OpenFileBrowser = 'OpenFileBrowser';
}

export class IStartPageMapping {
    public [StartPageMessages.RequestReleaseNotes]: IReleaseNotesPackage;
    public [StartPageMessages.SendReleaseNotes]: IReleaseNotesPackage;
    public [StartPageMessages.Started]: never | undefined;
    public [StartPageMessages.UpdateSettings]: string;
    public [StartPageMessages.OpenBlankNotebook]: never | undefined;
    public [StartPageMessages.OpenBlankPythonFile]: never | undefined;
    public [StartPageMessages.OpenInteractiveWindow]: never | undefined;
    public [StartPageMessages.OpenCommandPalette]: never | undefined;
    public [StartPageMessages.OpenCommandPaletteWithOpenNBSelected]: never | undefined;
    public [StartPageMessages.OpenSampleNotebook]: never | undefined;
    public [StartPageMessages.OpenFileBrowser]: never | undefined;
}
