// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides an Composable index template resource. This resource uses the `/_index_template` endpoint of the API that is available since version 7.8. Use `opensearch.IndexTemplate` if you are using older versions or if you want to keep using legacy Index Templates in versions 7.8+.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as opensearch from "@pulumi/opensearch";
 *
 * const template1 = new opensearch.ComposableIndexTemplate("template_1", {
 *     body: `{
 *   "index_patterns": ["te*", "bar*"],
 *   "template": {
 *     "settings": {
 *       "index": {
 *         "number_of_shards": 1
 *       }
 *     },
 *     "mappings": {
 *       "properties": {
 *         "host_name": {
 *           "type": "keyword"
 *         },
 *         "created_at": {
 *           "type": "date",
 *           "format": "EEE MMM dd HH:mm:ss Z yyyy"
 *         }
 *       }
 *     },
 *     "aliases": {
 *       "mydata": { }
 *     }
 *   },
 *   "priority": 200,
 *   "version": 3
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 *  $ pulumi import opensearch:index/composableIndexTemplate:ComposableIndexTemplate template_1 template_1
 * ```
 */
export class ComposableIndexTemplate extends pulumi.CustomResource {
    /**
     * Get an existing ComposableIndexTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComposableIndexTemplateState, opts?: pulumi.CustomResourceOptions): ComposableIndexTemplate {
        return new ComposableIndexTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opensearch:index/composableIndexTemplate:ComposableIndexTemplate';

    /**
     * Returns true if the given object is an instance of ComposableIndexTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComposableIndexTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComposableIndexTemplate.__pulumiType;
    }

    /**
     * The JSON body of the index template.
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * The name of the index template.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a ComposableIndexTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComposableIndexTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComposableIndexTemplateArgs | ComposableIndexTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComposableIndexTemplateState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ComposableIndexTemplateArgs | undefined;
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComposableIndexTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ComposableIndexTemplate resources.
 */
export interface ComposableIndexTemplateState {
    /**
     * The JSON body of the index template.
     */
    body?: pulumi.Input<string>;
    /**
     * The name of the index template.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComposableIndexTemplate resource.
 */
export interface ComposableIndexTemplateArgs {
    /**
     * The JSON body of the index template.
     */
    body: pulumi.Input<string>;
    /**
     * The name of the index template.
     */
    name?: pulumi.Input<string>;
}
