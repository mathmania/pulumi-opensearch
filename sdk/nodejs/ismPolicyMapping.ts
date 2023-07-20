// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides an OpenSearch Index State Management (ISM) policy. Please refer to the OpenSearch ISM documentation for details.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as opensearch from "@pulumi/opensearch";
 *
 * const test = new opensearch.IsmPolicyMapping("test", {
 *     indexes: "test_index",
 *     policyId: "policy_1",
 *     state: "delete",
 * });
 * ```
 *
 * ## Import
 *
 * # Import by poilcy_id
 *
 * ```sh
 *  $ pulumi import opensearch:index/ismPolicyMapping:IsmPolicyMapping test policy_1
 * ```
 */
export class IsmPolicyMapping extends pulumi.CustomResource {
    /**
     * Get an existing IsmPolicyMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IsmPolicyMappingState, opts?: pulumi.CustomResourceOptions): IsmPolicyMapping {
        return new IsmPolicyMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opensearch:index/ismPolicyMapping:IsmPolicyMapping';

    /**
     * Returns true if the given object is an instance of IsmPolicyMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IsmPolicyMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IsmPolicyMapping.__pulumiType;
    }

    /**
     * When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
     * background process only applies the change if the index is currently in the state specified.
     */
    public readonly includes!: pulumi.Output<{[key: string]: any}[] | undefined>;
    /**
     * Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
     */
    public readonly indexes!: pulumi.Output<string>;
    public readonly isSafe!: pulumi.Output<boolean | undefined>;
    public readonly managedIndexes!: pulumi.Output<string[]>;
    /**
     * The name of the policy.
     */
    public readonly policyId!: pulumi.Output<string>;
    /**
     * After a change in policy takes place, specify the state for the index to transition to
     */
    public readonly state!: pulumi.Output<string | undefined>;

    /**
     * Create a IsmPolicyMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IsmPolicyMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IsmPolicyMappingArgs | IsmPolicyMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IsmPolicyMappingState | undefined;
            resourceInputs["includes"] = state ? state.includes : undefined;
            resourceInputs["indexes"] = state ? state.indexes : undefined;
            resourceInputs["isSafe"] = state ? state.isSafe : undefined;
            resourceInputs["managedIndexes"] = state ? state.managedIndexes : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as IsmPolicyMappingArgs | undefined;
            if ((!args || args.indexes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'indexes'");
            }
            if ((!args || args.policyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyId'");
            }
            resourceInputs["includes"] = args ? args.includes : undefined;
            resourceInputs["indexes"] = args ? args.indexes : undefined;
            resourceInputs["isSafe"] = args ? args.isSafe : undefined;
            resourceInputs["managedIndexes"] = args ? args.managedIndexes : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IsmPolicyMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IsmPolicyMapping resources.
 */
export interface IsmPolicyMappingState {
    /**
     * When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
     * background process only applies the change if the index is currently in the state specified.
     */
    includes?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
     */
    indexes?: pulumi.Input<string>;
    isSafe?: pulumi.Input<boolean>;
    managedIndexes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the policy.
     */
    policyId?: pulumi.Input<string>;
    /**
     * After a change in policy takes place, specify the state for the index to transition to
     */
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IsmPolicyMapping resource.
 */
export interface IsmPolicyMappingArgs {
    /**
     * When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
     * background process only applies the change if the index is currently in the state specified.
     */
    includes?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
     */
    indexes: pulumi.Input<string>;
    isSafe?: pulumi.Input<boolean>;
    managedIndexes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the policy.
     */
    policyId: pulumi.Input<string>;
    /**
     * After a change in policy takes place, specify the state for the index to transition to
     */
    state?: pulumi.Input<string>;
}
