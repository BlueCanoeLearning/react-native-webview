import { Component } from 'react';
import { IOSWebViewProps, AndroidWebViewProps } from './lib/WebViewTypes';
export { WebViewMessageEvent, WebViewNavigation } from "./lib/WebViewTypes";

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps;

declare class WebView extends Component<WebViewProps> {
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading(): void;

    /**
     * Extra Native Component Config.
     */
    extraNativeComponentConfig: () => any;

    /**
     * Executes the JavaScript string.
     */
    injectJavaScript: (script: string) => void;

    /**
     * Focuses on WebView rendered page.
     */
    requestFocus: () => void;

    postMessage: (data: string)  => void;

    /**
     * **iOS Only**
     * 
     * Toggles whether the webview ignores the silent switch when
     * the audio session category is `AVAudioSession.Category.ambient`
     */
    ignoreSilentSwitch: (ignore: boolean) => void;
}

export { WebView };
export default WebView;
