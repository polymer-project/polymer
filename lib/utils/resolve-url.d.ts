// tslint:disable:variable-name Describing an API that's defined elsewhere.

export {resolveUrl};


/**
 * Resolves the given URL against the provided `baseUri'.
 *
 * Note that this function performs no resolution for URLs that start
 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
 * URL resolution, use `window.URL`.
 *
 * @returns resolved URL
 */
declare function resolveUrl(url: string, baseURI?: string|null): string;

export {resolveCss};


/**
 * Resolves any relative URL's in the given CSS text against the provided
 * `ownerDocument`'s `baseURI`.
 *
 * @returns Processed CSS text with resolved URL's
 */
declare function resolveCss(cssText: string, baseURI: string): string;

export {pathFromUrl};


/**
 * Returns a path from a given `url`. The path includes the trailing
 * `/` from the url.
 *
 * @returns resolved path
 */
declare function pathFromUrl(url: string): string;
