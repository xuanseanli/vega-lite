"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mark_1 = require("./../mark");
var boxplot_1 = require("./boxplot");
var errorbar_1 = require("./errorbar");
// This package import below makes the generated .d.ts file compatible with
// Typescript 2.7 so that libraries requiring us can use Typedoc (which
// currently is limited to Typescript 2.7). This comment and import can be
// removed when Typedoc is updated to Typescript 2.9 or later. See
// https://github.com/vega/vega-lite/issues/3862 for more details.
var boxplot = tslib_1.__importStar(require("./boxplot"));
/**
 * Registry index for all composite mark's normalizer
 */
var normalizerRegistry = {};
function add(mark, normalizer) {
    normalizerRegistry[mark] = normalizer;
}
exports.add = add;
function remove(mark) {
    delete normalizerRegistry[mark];
}
exports.remove = remove;
exports.COMPOSITE_MARK_STYLES = boxplot.BOXPLOT_STYLES;
exports.VL_ONLY_COMPOSITE_MARK_SPECIFIC_CONFIG_PROPERTY_INDEX = tslib_1.__assign({}, boxplot_1.VL_ONLY_BOXPLOT_CONFIG_PROPERTY_INDEX);
add(boxplot_1.BOXPLOT, boxplot_1.normalizeBoxPlot);
add(errorbar_1.ERRORBAR, errorbar_1.normalizeErrorBar);
/**
 * Transform a unit spec with composite mark into a normal layer spec.
 */
function normalize(
// This GenericUnitSpec has any as Encoding because unit specs with composite mark can have additional encoding channels.
spec, config) {
    var mark = mark_1.isMarkDef(spec.mark) ? spec.mark.type : spec.mark;
    var normalizer = normalizerRegistry[mark];
    if (normalizer) {
        return normalizer(spec, config);
    }
    throw new Error("Invalid mark type \"" + mark + "\"");
}
exports.normalize = normalize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9zaXRlbWFyay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrQ0FBNkM7QUFFN0MscUNBQTRIO0FBQzVILHVDQUF1RDtBQUV2RCwyRUFBMkU7QUFDM0UsdUVBQXVFO0FBQ3ZFLDBFQUEwRTtBQUMxRSxrRUFBa0U7QUFDbEUsa0VBQWtFO0FBQ2xFLHlEQUFxQztBQUtyQzs7R0FFRztBQUNILElBQU0sa0JBQWtCLEdBQXFDLEVBQUUsQ0FBQztBQUVoRSxhQUFvQixJQUFZLEVBQUUsVUFBMEI7SUFDMUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3hDLENBQUM7QUFGRCxrQkFFQztBQUVELGdCQUF1QixJQUFZO0lBQ2pDLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUZELHdCQUVDO0FBUVksUUFBQSxxQkFBcUIsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0FBSy9DLFFBQUEscURBQXFELHdCQUM3RCwrQ0FBcUMsRUFDeEM7QUFFRixHQUFHLENBQUMsaUJBQU8sRUFBRSwwQkFBZ0IsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxtQkFBUSxFQUFFLDRCQUFpQixDQUFDLENBQUM7QUFFakM7O0dBRUc7QUFDSDtBQUNJLHlIQUF5SDtBQUN6SCxJQUFtQyxFQUNuQyxNQUFjO0lBR2hCLElBQU0sSUFBSSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMvRCxJQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxJQUFJLFVBQVUsRUFBRTtRQUNkLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqQztJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXNCLElBQUksT0FBRyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQWJELDhCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gJy4vLi4vY29uZmlnJztcbmltcG9ydCB7QW55TWFyaywgaXNNYXJrRGVmfSBmcm9tICcuLy4uL21hcmsnO1xuaW1wb3J0IHtHZW5lcmljVW5pdFNwZWMsIE5vcm1hbGl6ZWRMYXllclNwZWN9IGZyb20gJy4vLi4vc3BlYyc7XG5pbXBvcnQge0JPWFBMT1QsIEJveFBsb3RDb25maWdNaXhpbnMsIEJveFBsb3REZWYsIG5vcm1hbGl6ZUJveFBsb3QsIFZMX09OTFlfQk9YUExPVF9DT05GSUdfUFJPUEVSVFlfSU5ERVh9IGZyb20gJy4vYm94cGxvdCc7XG5pbXBvcnQge0VSUk9SQkFSLCBub3JtYWxpemVFcnJvckJhcn0gZnJvbSAnLi9lcnJvcmJhcic7XG5cbi8vIFRoaXMgcGFja2FnZSBpbXBvcnQgYmVsb3cgbWFrZXMgdGhlIGdlbmVyYXRlZCAuZC50cyBmaWxlIGNvbXBhdGlibGUgd2l0aFxuLy8gVHlwZXNjcmlwdCAyLjcgc28gdGhhdCBsaWJyYXJpZXMgcmVxdWlyaW5nIHVzIGNhbiB1c2UgVHlwZWRvYyAod2hpY2hcbi8vIGN1cnJlbnRseSBpcyBsaW1pdGVkIHRvIFR5cGVzY3JpcHQgMi43KS4gVGhpcyBjb21tZW50IGFuZCBpbXBvcnQgY2FuIGJlXG4vLyByZW1vdmVkIHdoZW4gVHlwZWRvYyBpcyB1cGRhdGVkIHRvIFR5cGVzY3JpcHQgMi45IG9yIGxhdGVyLiBTZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92ZWdhL3ZlZ2EtbGl0ZS9pc3N1ZXMvMzg2MiBmb3IgbW9yZSBkZXRhaWxzLlxuaW1wb3J0ICogYXMgYm94cGxvdCBmcm9tICcuL2JveHBsb3QnO1xuXG5leHBvcnQge0JveFBsb3RDb25maWd9IGZyb20gJy4vYm94cGxvdCc7XG5leHBvcnQgdHlwZSBVbml0Tm9ybWFsaXplciA9IChzcGVjOiBHZW5lcmljVW5pdFNwZWM8YW55LCBhbnk+LCBjb25maWc6IENvbmZpZyk9PiBOb3JtYWxpemVkTGF5ZXJTcGVjO1xuXG4vKipcbiAqIFJlZ2lzdHJ5IGluZGV4IGZvciBhbGwgY29tcG9zaXRlIG1hcmsncyBub3JtYWxpemVyXG4gKi9cbmNvbnN0IG5vcm1hbGl6ZXJSZWdpc3RyeToge1ttYXJrOiBzdHJpbmddOiBVbml0Tm9ybWFsaXplcn0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChtYXJrOiBzdHJpbmcsIG5vcm1hbGl6ZXI6IFVuaXROb3JtYWxpemVyKSB7XG4gIG5vcm1hbGl6ZXJSZWdpc3RyeVttYXJrXSA9IG5vcm1hbGl6ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUobWFyazogc3RyaW5nKSB7XG4gIGRlbGV0ZSBub3JtYWxpemVyUmVnaXN0cnlbbWFya107XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvc2l0ZU1hcmsgPSBCT1hQTE9UIHwgRVJST1JCQVI7XG5cbmV4cG9ydCB0eXBlIENvbXBvc2l0ZU1hcmtEZWYgPSBCb3hQbG90RGVmO1xuXG5leHBvcnQgdHlwZSBDb21wb3NpdGVBZ2dyZWdhdGUgPSBCT1hQTE9UO1xuXG5leHBvcnQgY29uc3QgQ09NUE9TSVRFX01BUktfU1RZTEVTID0gYm94cGxvdC5CT1hQTE9UX1NUWUxFUztcbmV4cG9ydCB0eXBlIENvbXBvc2l0ZU1hcmtTdHlsZSA9IHR5cGVvZiBDT01QT1NJVEVfTUFSS19TVFlMRVNbMF07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlTWFya0NvbmZpZ01peGlucyBleHRlbmRzIEJveFBsb3RDb25maWdNaXhpbnMge31cblxuZXhwb3J0IGNvbnN0IFZMX09OTFlfQ09NUE9TSVRFX01BUktfU1BFQ0lGSUNfQ09ORklHX1BST1BFUlRZX0lOREVYID0ge1xuICAuLi5WTF9PTkxZX0JPWFBMT1RfQ09ORklHX1BST1BFUlRZX0lOREVYXG59O1xuXG5hZGQoQk9YUExPVCwgbm9ybWFsaXplQm94UGxvdCk7XG5hZGQoRVJST1JCQVIsIG5vcm1hbGl6ZUVycm9yQmFyKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSB1bml0IHNwZWMgd2l0aCBjb21wb3NpdGUgbWFyayBpbnRvIGEgbm9ybWFsIGxheWVyIHNwZWMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUoXG4gICAgLy8gVGhpcyBHZW5lcmljVW5pdFNwZWMgaGFzIGFueSBhcyBFbmNvZGluZyBiZWNhdXNlIHVuaXQgc3BlY3Mgd2l0aCBjb21wb3NpdGUgbWFyayBjYW4gaGF2ZSBhZGRpdGlvbmFsIGVuY29kaW5nIGNoYW5uZWxzLlxuICAgIHNwZWM6IEdlbmVyaWNVbml0U3BlYzxhbnksIEFueU1hcms+LFxuICAgIGNvbmZpZzogQ29uZmlnXG4gICk6IE5vcm1hbGl6ZWRMYXllclNwZWMge1xuXG4gIGNvbnN0IG1hcmsgPSBpc01hcmtEZWYoc3BlYy5tYXJrKSA/IHNwZWMubWFyay50eXBlIDogc3BlYy5tYXJrO1xuICBjb25zdCBub3JtYWxpemVyID0gbm9ybWFsaXplclJlZ2lzdHJ5W21hcmtdO1xuICBpZiAobm9ybWFsaXplcikge1xuICAgIHJldHVybiBub3JtYWxpemVyKHNwZWMsIGNvbmZpZyk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWFyayB0eXBlIFwiJHttYXJrfVwiYCk7XG59XG4iXX0=