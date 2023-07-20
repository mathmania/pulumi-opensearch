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
    /// Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases. You cannot directly apply a component template to a data stream or index. To be applied, a component template must be included in an index template’s `composed_of` list.
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
    ///         var test = new Opensearch.ComponentTemplate("test", new Opensearch.ComponentTemplateArgs
    ///         {
    ///             Body = @"{
    ///   ""template"": {
    ///     ""settings"": {
    ///       ""index"": {
    ///         ""number_of_shards"": 1
    ///       }
    ///     },
    ///     ""mappings"": {
    ///       ""properties"": {
    ///         ""host_name"": {
    ///           ""type"": ""keyword""
    ///         },
    ///         ""created_at"": {
    ///           ""type"": ""date"",
    ///           ""format"": ""EEE MMM dd HH:mm:ss Z yyyy""
    ///         }
    ///       }
    ///     },
    ///     ""aliases"": {
    ///       ""mydata"": { }
    ///     }
    ///   }
    /// }
    /// 
    /// ",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// # Import by name
    /// 
    /// ```sh
    ///  $ pulumi import opensearch:index/componentTemplate:ComponentTemplate test terraform-test
    /// ```
    /// </summary>
    [OpensearchResourceType("opensearch:index/componentTemplate:ComponentTemplate")]
    public partial class ComponentTemplate : Pulumi.CustomResource
    {
        /// <summary>
        /// The JSON body of the template.
        /// </summary>
        [Output("body")]
        public Output<string> Body { get; private set; } = null!;

        /// <summary>
        /// Name of the component template to create.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;


        /// <summary>
        /// Create a ComponentTemplate resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ComponentTemplate(string name, ComponentTemplateArgs args, CustomResourceOptions? options = null)
            : base("opensearch:index/componentTemplate:ComponentTemplate", name, args ?? new ComponentTemplateArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ComponentTemplate(string name, Input<string> id, ComponentTemplateState? state = null, CustomResourceOptions? options = null)
            : base("opensearch:index/componentTemplate:ComponentTemplate", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ComponentTemplate resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ComponentTemplate Get(string name, Input<string> id, ComponentTemplateState? state = null, CustomResourceOptions? options = null)
        {
            return new ComponentTemplate(name, id, state, options);
        }
    }

    public sealed class ComponentTemplateArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The JSON body of the template.
        /// </summary>
        [Input("body", required: true)]
        public Input<string> Body { get; set; } = null!;

        /// <summary>
        /// Name of the component template to create.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ComponentTemplateArgs()
        {
        }
    }

    public sealed class ComponentTemplateState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The JSON body of the template.
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        /// <summary>
        /// Name of the component template to create.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ComponentTemplateState()
        {
        }
    }
}
