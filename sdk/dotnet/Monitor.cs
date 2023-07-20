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
    /// Provides an OpenSearch monitor. Please refer to the OpenSearch monitor documentation for details.
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
    ///         var moviesLastHour = new Opensearch.Monitor("moviesLastHour", new Opensearch.MonitorArgs
    ///         {
    ///             Body = @$"{{
    ///   ""name"": ""test-monitor"",
    ///   ""type"": ""monitor"",
    ///   ""enabled"": true,
    ///   ""schedule"": {{
    ///     ""period"": {{
    ///       ""interval"": 1,
    ///       ""unit"": ""MINUTES""
    ///     }}
    ///   }},
    ///   ""inputs"": [{{
    ///     ""search"": {{
    ///       ""indices"": [""movies""],
    ///       ""query"": {{
    ///         ""size"": 0,
    ///         ""aggregations"": {{}},
    ///         ""query"": {{
    ///           ""bool"": {{
    ///             ""adjust_pure_negative"":true,
    ///             ""boost"":1,
    ///             ""filter"": [{{
    ///               ""range"": {{
    ///                 ""@timestamp"": {{
    ///                   ""boost"":1,
    ///                   ""from"":""||-1h"",
    ///                   ""to"":"""",
    ///                   ""include_lower"":true,
    ///                   ""include_upper"":true,
    ///                   ""format"": ""epoch_millis""
    ///                 }}
    ///               }}
    ///             }}]
    ///           }}
    ///         }}
    ///       }}
    ///     }}
    ///   }}],
    ///   ""triggers"": [
    ///     {{
    ///       ""name"" : ""Errors"",
    ///       ""severity"" : ""1"",
    ///       ""condition"" : {{
    ///         ""script"" : {{
    ///           ""source"" : ""ctx.results[0].hits.total.value &gt; 0"",
    ///           ""lang"" : ""painless""
    ///         }}
    ///       }},
    ///       ""actions"" : [
    ///         {{
    ///           ""name"" : ""Slack"",
    ///           ""destination_id"" : ""{opensearch_destination.Slack_on_call_channel.Id}"",
    ///           ""message_template"" : {{
    ///             ""source"" : ""bogus"",
    ///             ""lang"" : ""mustache""
    ///           }},
    ///           ""throttle_enabled"" : false,
    ///           ""subject_template"" : {{
    ///             ""source"" : ""Production Errors"",
    ///             ""lang"" : ""mustache""
    ///           }}
    ///         }}
    ///       ]
    ///     }}
    ///   ]
    /// }}
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
    /// ```sh
    ///  $ pulumi import opensearch:index/monitor:Monitor alert lgOZb3UB96pyyRQv0ppQ
    /// ```
    /// </summary>
    [OpensearchResourceType("opensearch:index/monitor:Monitor")]
    public partial class Monitor : Pulumi.CustomResource
    {
        /// <summary>
        /// The monitor document
        /// </summary>
        [Output("body")]
        public Output<string> Body { get; private set; } = null!;


        /// <summary>
        /// Create a Monitor resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Monitor(string name, MonitorArgs args, CustomResourceOptions? options = null)
            : base("opensearch:index/monitor:Monitor", name, args ?? new MonitorArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Monitor(string name, Input<string> id, MonitorState? state = null, CustomResourceOptions? options = null)
            : base("opensearch:index/monitor:Monitor", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Monitor resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Monitor Get(string name, Input<string> id, MonitorState? state = null, CustomResourceOptions? options = null)
        {
            return new Monitor(name, id, state, options);
        }
    }

    public sealed class MonitorArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The monitor document
        /// </summary>
        [Input("body", required: true)]
        public Input<string> Body { get; set; } = null!;

        public MonitorArgs()
        {
        }
    }

    public sealed class MonitorState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The monitor document
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        public MonitorState()
        {
        }
    }
}
