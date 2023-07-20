// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides an OpenSearch Dashboards object resource. This resource interacts directly with the underlying OpenSearch index backing Dashboards, so the format must match what Dashboards the version of Dashboards is expecting. Dashboards v5 and v6 will export all objects in Dashboards v5 format, so the exported objects cannot be used as a source for `body` in this resource - directly pulling the JSON from a Dashboards index of the same version of OpenSearch targeted by the provider is a workaround.
 *
 * With the removal of mapping types in OpenSearch, the Dashboards index changed from v5 to >= v6, previously the document mapping type had the Dashboards object type, however, the `_type` going forward is `doc` and the type is within the document, see below. Using v5 doc types in v6 and above will result in errors from OpenSearch after one or more document types are used.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as opensearch from "@pulumi/opensearch";
 *
 * const testVisualizationV6 = new opensearch.DashboardObject("test_visualization_v6", {
 *     body: `[
 *   {
 *     "_id": "visualization:response-time-percentile",
 *     "_type": "doc",
 *     "_source": {
 *       "type": "visualization",
 *       "visualization": {
 *         "title": "Total response time percentiles",
 *         "visState": "{\\"title\\":\\"Total response time percentiles\\",\\"type\\":\\"line\\",\\"params\\":{\\"addTooltip\\":true,\\"addLegend\\":true,\\"legendPosition\\":\\"right\\",\\"showCircles\\":true,\\"interpolate\\":\\"linear\\",\\"scale\\":\\"linear\\",\\"drawLinesBetweenPoints\\":true,\\"radiusRatio\\":9,\\"times\\":[],\\"addTimeMarker\\":false,\\"defaultYExtents\\":false,\\"setYExtents\\":false},\\"aggs\\":[{\\"id\\":\\"1\\",\\"enabled\\":true,\\"type\\":\\"percentiles\\",\\"schema\\":\\"metric\\",\\"params\\":{\\"field\\":\\"app.total_time\\",\\"percents\\":[50,90,95]}},{\\"id\\":\\"2\\",\\"enabled\\":true,\\"type\\":\\"date_histogram\\",\\"schema\\":\\"segment\\",\\"params\\":{\\"field\\":\\"@timestamp\\",\\"interval\\":\\"auto\\",\\"customInterval\\":\\"2h\\",\\"min_doc_count\\":1,\\"extended_bounds\\":{}}},{\\"id\\":\\"3\\",\\"enabled\\":true,\\"type\\":\\"terms\\",\\"schema\\":\\"group\\",\\"params\\":{\\"field\\":\\"system.syslog.program\\",\\"size\\":5,\\"order\\":\\"desc\\",\\"orderBy\\":\\"_term\\"}}],\\"listeners\\":{}}",
 *         "uiStateJSON": "{}",
 *         "description": "",
 *         "version": 1
 *       }
 *     }
 *   }
 * ]
 * `,
 * });
 * const testVisualizationV7 = new opensearch.DashboardObject("test_visualization_v7", {
 *     body: `[
 *   {
 *     "_id": "response-time-percentile",
 *     "_source": {
 *       "type": "visualization",
 *       "visualization": {
 *         "title": "Total response time percentiles",
 *         "visState": "{\\"title\\":\\"Total response time percentiles\\",\\"type\\":\\"line\\",\\"params\\":{\\"addTooltip\\":true,\\"addLegend\\":true,\\"legendPosition\\":\\"right\\",\\"showCircles\\":true,\\"interpolate\\":\\"linear\\",\\"scale\\":\\"linear\\",\\"drawLinesBetweenPoints\\":true,\\"radiusRatio\\":9,\\"times\\":[],\\"addTimeMarker\\":false,\\"defaultYExtents\\":false,\\"setYExtents\\":false},\\"aggs\\":[{\\"id\\":\\"1\\",\\"enabled\\":true,\\"type\\":\\"percentiles\\",\\"schema\\":\\"metric\\",\\"params\\":{\\"field\\":\\"app.total_time\\",\\"percents\\":[50,90,95]}},{\\"id\\":\\"2\\",\\"enabled\\":true,\\"type\\":\\"date_histogram\\",\\"schema\\":\\"segment\\",\\"params\\":{\\"field\\":\\"@timestamp\\",\\"interval\\":\\"auto\\",\\"customInterval\\":\\"2h\\",\\"min_doc_count\\":1,\\"extended_bounds\\":{}}},{\\"id\\":\\"3\\",\\"enabled\\":true,\\"type\\":\\"terms\\",\\"schema\\":\\"group\\",\\"params\\":{\\"field\\":\\"system.syslog.program\\",\\"size\\":5,\\"order\\":\\"desc\\",\\"orderBy\\":\\"_term\\"}}],\\"listeners\\":{}}",
 *         "uiStateJSON": "{}",
 *         "description": "",
 *         "version": 1
 *       }
 *     }
 *   }
 * ]
 * `,
 * });
 * const testIndexPatternV6 = new opensearch.DashboardObject("test_index_pattern_v6", {
 *     body: `[
 *   {
 *     "_id": "index-pattern:cloudwatch",
 *     "_type": "doc",
 *     "_source": {
 *       "type": "index-pattern",
 *       "index-pattern": {
 *         "title": "cloudwatch-*",
 *         "timeFieldName": "timestamp"
 *       }
 *     }
 *   }
 * ]
 * `,
 * });
 * const testIndexPatternV7 = new opensearch.DashboardObject("test_index_pattern_v7", {
 *     body: `[
 *   {
 *     "_id": "index-pattern:cloudwatch",
 *     "_type": "doc",
 *     "_source": {
 *       "type": "index-pattern",
 *       "index-pattern": {
 *         "title": "cloudwatch-*",
 *         "timeFieldName": "timestamp"
 *       }
 *     }
 *   }
 * ]
 * `,
 * });
 * ```
 */
export class DashboardObject extends pulumi.CustomResource {
    /**
     * Get an existing DashboardObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DashboardObjectState, opts?: pulumi.CustomResourceOptions): DashboardObject {
        return new DashboardObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opensearch:index/dashboardObject:DashboardObject';

    /**
     * Returns true if the given object is an instance of DashboardObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DashboardObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DashboardObject.__pulumiType;
    }

    /**
     * The JSON body of the dashboard object.
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * The name of the index where dashboard data is stored.
     */
    public readonly index!: pulumi.Output<string | undefined>;

    /**
     * Create a DashboardObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DashboardObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DashboardObjectArgs | DashboardObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DashboardObjectState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["index"] = state ? state.index : undefined;
        } else {
            const args = argsOrState as DashboardObjectArgs | undefined;
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["index"] = args ? args.index : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DashboardObject.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DashboardObject resources.
 */
export interface DashboardObjectState {
    /**
     * The JSON body of the dashboard object.
     */
    body?: pulumi.Input<string>;
    /**
     * The name of the index where dashboard data is stored.
     */
    index?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DashboardObject resource.
 */
export interface DashboardObjectArgs {
    /**
     * The JSON body of the dashboard object.
     */
    body: pulumi.Input<string>;
    /**
     * The name of the index where dashboard data is stored.
     */
    index?: pulumi.Input<string>;
}
