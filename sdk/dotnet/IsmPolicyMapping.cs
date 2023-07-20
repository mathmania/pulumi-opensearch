// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Opensearch
{
    /// <summary>
    /// Provides an OpenSearch Index State Management (ISM) policy. Please refer to the OpenSearch ISM documentation for details.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Opensearch = Pulumi.Opensearch;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var test = new Opensearch.IsmPolicyMapping("test", new Opensearch.IsmPolicyMappingArgs
    ///         {
    ///             Indexes = "test_index",
    ///             PolicyId = "policy_1",
    ///             State = "delete",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// # Import by poilcy_id
    /// 
    /// ```sh
    ///  $ pulumi import opensearch:index/ismPolicyMapping:IsmPolicyMapping test policy_1
    /// ```
    /// </summary>
    [OpensearchResourceType("opensearch:index/ismPolicyMapping:IsmPolicyMapping")]
    public partial class IsmPolicyMapping : Pulumi.CustomResource
    {
        /// <summary>
        /// When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
        /// background process only applies the change if the index is currently in the state specified.
        /// </summary>
        [Output("includes")]
        public Output<ImmutableArray<ImmutableDictionary<string, object>>> Includes { get; private set; } = null!;

        /// <summary>
        /// Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
        /// </summary>
        [Output("indexes")]
        public Output<string> Indexes { get; private set; } = null!;

        [Output("isSafe")]
        public Output<bool?> IsSafe { get; private set; } = null!;

        [Output("managedIndexes")]
        public Output<ImmutableArray<string>> ManagedIndexes { get; private set; } = null!;

        /// <summary>
        /// The name of the policy.
        /// </summary>
        [Output("policyId")]
        public Output<string> PolicyId { get; private set; } = null!;

        /// <summary>
        /// After a change in policy takes place, specify the state for the index to transition to
        /// </summary>
        [Output("state")]
        public Output<string?> State { get; private set; } = null!;


        /// <summary>
        /// Create a IsmPolicyMapping resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IsmPolicyMapping(string name, IsmPolicyMappingArgs args, CustomResourceOptions? options = null)
            : base("opensearch:index/ismPolicyMapping:IsmPolicyMapping", name, args ?? new IsmPolicyMappingArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IsmPolicyMapping(string name, Input<string> id, IsmPolicyMappingState? state = null, CustomResourceOptions? options = null)
            : base("opensearch:index/ismPolicyMapping:IsmPolicyMapping", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IsmPolicyMapping resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IsmPolicyMapping Get(string name, Input<string> id, IsmPolicyMappingState? state = null, CustomResourceOptions? options = null)
        {
            return new IsmPolicyMapping(name, id, state, options);
        }
    }

    public sealed class IsmPolicyMappingArgs : Pulumi.ResourceArgs
    {
        [Input("includes")]
        private InputList<ImmutableDictionary<string, object>>? _includes;

        /// <summary>
        /// When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
        /// background process only applies the change if the index is currently in the state specified.
        /// </summary>
        public InputList<ImmutableDictionary<string, object>> Includes
        {
            get => _includes ?? (_includes = new InputList<ImmutableDictionary<string, object>>());
            set => _includes = value;
        }

        /// <summary>
        /// Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
        /// </summary>
        [Input("indexes", required: true)]
        public Input<string> Indexes { get; set; } = null!;

        [Input("isSafe")]
        public Input<bool>? IsSafe { get; set; }

        [Input("managedIndexes")]
        private InputList<string>? _managedIndexes;
        public InputList<string> ManagedIndexes
        {
            get => _managedIndexes ?? (_managedIndexes = new InputList<string>());
            set => _managedIndexes = value;
        }

        /// <summary>
        /// The name of the policy.
        /// </summary>
        [Input("policyId", required: true)]
        public Input<string> PolicyId { get; set; } = null!;

        /// <summary>
        /// After a change in policy takes place, specify the state for the index to transition to
        /// </summary>
        [Input("state")]
        public Input<string>? State { get; set; }

        public IsmPolicyMappingArgs()
        {
        }
    }

    public sealed class IsmPolicyMappingState : Pulumi.ResourceArgs
    {
        [Input("includes")]
        private InputList<ImmutableDictionary<string, object>>? _includes;

        /// <summary>
        /// When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The
        /// background process only applies the change if the index is currently in the state specified.
        /// </summary>
        public InputList<ImmutableDictionary<string, object>> Includes
        {
            get => _includes ?? (_includes = new InputList<ImmutableDictionary<string, object>>());
            set => _includes = value;
        }

        /// <summary>
        /// Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
        /// </summary>
        [Input("indexes")]
        public Input<string>? Indexes { get; set; }

        [Input("isSafe")]
        public Input<bool>? IsSafe { get; set; }

        [Input("managedIndexes")]
        private InputList<string>? _managedIndexes;
        public InputList<string> ManagedIndexes
        {
            get => _managedIndexes ?? (_managedIndexes = new InputList<string>());
            set => _managedIndexes = value;
        }

        /// <summary>
        /// The name of the policy.
        /// </summary>
        [Input("policyId")]
        public Input<string>? PolicyId { get; set; }

        /// <summary>
        /// After a change in policy takes place, specify the state for the index to transition to
        /// </summary>
        [Input("state")]
        public Input<string>? State { get; set; }

        public IsmPolicyMappingState()
        {
        }
    }
}
