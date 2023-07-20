// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Opensearch.Outputs
{

    [OutputType]
    public sealed class AuditConfigAudit
    {
        public readonly ImmutableArray<string> DisabledRestCategories;
        public readonly ImmutableArray<string> DisabledTransportCategories;
        public readonly bool? EnableRest;
        public readonly bool? EnableTransport;
        public readonly bool? ExcludeSensitiveHeaders;
        public readonly ImmutableArray<string> IgnoreRequests;
        public readonly ImmutableArray<string> IgnoreUsers;
        public readonly bool? LogRequestBody;
        public readonly bool? ResolveBulkRequests;
        public readonly bool? ResolveIndices;

        [OutputConstructor]
        private AuditConfigAudit(
            ImmutableArray<string> disabledRestCategories,

            ImmutableArray<string> disabledTransportCategories,

            bool? enableRest,

            bool? enableTransport,

            bool? excludeSensitiveHeaders,

            ImmutableArray<string> ignoreRequests,

            ImmutableArray<string> ignoreUsers,

            bool? logRequestBody,

            bool? resolveBulkRequests,

            bool? resolveIndices)
        {
            DisabledRestCategories = disabledRestCategories;
            DisabledTransportCategories = disabledTransportCategories;
            EnableRest = enableRest;
            EnableTransport = enableTransport;
            ExcludeSensitiveHeaders = excludeSensitiveHeaders;
            IgnoreRequests = ignoreRequests;
            IgnoreUsers = ignoreUsers;
            LogRequestBody = logRequestBody;
            ResolveBulkRequests = resolveBulkRequests;
            ResolveIndices = resolveIndices;
        }
    }
}
