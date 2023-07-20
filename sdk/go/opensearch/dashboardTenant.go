// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package opensearch

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Provides an OpenSearch dashboard tenant resource. Please refer to the OpenSearch documentation for details.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-opensearch/sdk/go/opensearch"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := opensearch.NewDashboardTenant(ctx, "test", &opensearch.DashboardTenantArgs{
// 			Description: pulumi.String("test tenant"),
// 			TenantName:  pulumi.String("test"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// ```sh
//  $ pulumi import opensearch:index/dashboardTenant:DashboardTenant writer test
// ```
type DashboardTenant struct {
	pulumi.CustomResourceState

	// Description of the tenant.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	Index       pulumi.StringOutput    `pulumi:"index"`
	// The name of the tenant.
	TenantName pulumi.StringOutput `pulumi:"tenantName"`
}

// NewDashboardTenant registers a new resource with the given unique name, arguments, and options.
func NewDashboardTenant(ctx *pulumi.Context,
	name string, args *DashboardTenantArgs, opts ...pulumi.ResourceOption) (*DashboardTenant, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.TenantName == nil {
		return nil, errors.New("invalid value for required argument 'TenantName'")
	}
	var resource DashboardTenant
	err := ctx.RegisterResource("opensearch:index/dashboardTenant:DashboardTenant", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDashboardTenant gets an existing DashboardTenant resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDashboardTenant(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DashboardTenantState, opts ...pulumi.ResourceOption) (*DashboardTenant, error) {
	var resource DashboardTenant
	err := ctx.ReadResource("opensearch:index/dashboardTenant:DashboardTenant", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DashboardTenant resources.
type dashboardTenantState struct {
	// Description of the tenant.
	Description *string `pulumi:"description"`
	Index       *string `pulumi:"index"`
	// The name of the tenant.
	TenantName *string `pulumi:"tenantName"`
}

type DashboardTenantState struct {
	// Description of the tenant.
	Description pulumi.StringPtrInput
	Index       pulumi.StringPtrInput
	// The name of the tenant.
	TenantName pulumi.StringPtrInput
}

func (DashboardTenantState) ElementType() reflect.Type {
	return reflect.TypeOf((*dashboardTenantState)(nil)).Elem()
}

type dashboardTenantArgs struct {
	// Description of the tenant.
	Description *string `pulumi:"description"`
	// The name of the tenant.
	TenantName string `pulumi:"tenantName"`
}

// The set of arguments for constructing a DashboardTenant resource.
type DashboardTenantArgs struct {
	// Description of the tenant.
	Description pulumi.StringPtrInput
	// The name of the tenant.
	TenantName pulumi.StringInput
}

func (DashboardTenantArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dashboardTenantArgs)(nil)).Elem()
}

type DashboardTenantInput interface {
	pulumi.Input

	ToDashboardTenantOutput() DashboardTenantOutput
	ToDashboardTenantOutputWithContext(ctx context.Context) DashboardTenantOutput
}

func (*DashboardTenant) ElementType() reflect.Type {
	return reflect.TypeOf((**DashboardTenant)(nil)).Elem()
}

func (i *DashboardTenant) ToDashboardTenantOutput() DashboardTenantOutput {
	return i.ToDashboardTenantOutputWithContext(context.Background())
}

func (i *DashboardTenant) ToDashboardTenantOutputWithContext(ctx context.Context) DashboardTenantOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DashboardTenantOutput)
}

// DashboardTenantArrayInput is an input type that accepts DashboardTenantArray and DashboardTenantArrayOutput values.
// You can construct a concrete instance of `DashboardTenantArrayInput` via:
//
//          DashboardTenantArray{ DashboardTenantArgs{...} }
type DashboardTenantArrayInput interface {
	pulumi.Input

	ToDashboardTenantArrayOutput() DashboardTenantArrayOutput
	ToDashboardTenantArrayOutputWithContext(context.Context) DashboardTenantArrayOutput
}

type DashboardTenantArray []DashboardTenantInput

func (DashboardTenantArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*DashboardTenant)(nil)).Elem()
}

func (i DashboardTenantArray) ToDashboardTenantArrayOutput() DashboardTenantArrayOutput {
	return i.ToDashboardTenantArrayOutputWithContext(context.Background())
}

func (i DashboardTenantArray) ToDashboardTenantArrayOutputWithContext(ctx context.Context) DashboardTenantArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DashboardTenantArrayOutput)
}

// DashboardTenantMapInput is an input type that accepts DashboardTenantMap and DashboardTenantMapOutput values.
// You can construct a concrete instance of `DashboardTenantMapInput` via:
//
//          DashboardTenantMap{ "key": DashboardTenantArgs{...} }
type DashboardTenantMapInput interface {
	pulumi.Input

	ToDashboardTenantMapOutput() DashboardTenantMapOutput
	ToDashboardTenantMapOutputWithContext(context.Context) DashboardTenantMapOutput
}

type DashboardTenantMap map[string]DashboardTenantInput

func (DashboardTenantMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*DashboardTenant)(nil)).Elem()
}

func (i DashboardTenantMap) ToDashboardTenantMapOutput() DashboardTenantMapOutput {
	return i.ToDashboardTenantMapOutputWithContext(context.Background())
}

func (i DashboardTenantMap) ToDashboardTenantMapOutputWithContext(ctx context.Context) DashboardTenantMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DashboardTenantMapOutput)
}

type DashboardTenantOutput struct{ *pulumi.OutputState }

func (DashboardTenantOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**DashboardTenant)(nil)).Elem()
}

func (o DashboardTenantOutput) ToDashboardTenantOutput() DashboardTenantOutput {
	return o
}

func (o DashboardTenantOutput) ToDashboardTenantOutputWithContext(ctx context.Context) DashboardTenantOutput {
	return o
}

// Description of the tenant.
func (o DashboardTenantOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *DashboardTenant) pulumi.StringPtrOutput { return v.Description }).(pulumi.StringPtrOutput)
}

func (o DashboardTenantOutput) Index() pulumi.StringOutput {
	return o.ApplyT(func(v *DashboardTenant) pulumi.StringOutput { return v.Index }).(pulumi.StringOutput)
}

// The name of the tenant.
func (o DashboardTenantOutput) TenantName() pulumi.StringOutput {
	return o.ApplyT(func(v *DashboardTenant) pulumi.StringOutput { return v.TenantName }).(pulumi.StringOutput)
}

type DashboardTenantArrayOutput struct{ *pulumi.OutputState }

func (DashboardTenantArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*DashboardTenant)(nil)).Elem()
}

func (o DashboardTenantArrayOutput) ToDashboardTenantArrayOutput() DashboardTenantArrayOutput {
	return o
}

func (o DashboardTenantArrayOutput) ToDashboardTenantArrayOutputWithContext(ctx context.Context) DashboardTenantArrayOutput {
	return o
}

func (o DashboardTenantArrayOutput) Index(i pulumi.IntInput) DashboardTenantOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *DashboardTenant {
		return vs[0].([]*DashboardTenant)[vs[1].(int)]
	}).(DashboardTenantOutput)
}

type DashboardTenantMapOutput struct{ *pulumi.OutputState }

func (DashboardTenantMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*DashboardTenant)(nil)).Elem()
}

func (o DashboardTenantMapOutput) ToDashboardTenantMapOutput() DashboardTenantMapOutput {
	return o
}

func (o DashboardTenantMapOutput) ToDashboardTenantMapOutputWithContext(ctx context.Context) DashboardTenantMapOutput {
	return o
}

func (o DashboardTenantMapOutput) MapIndex(k pulumi.StringInput) DashboardTenantOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *DashboardTenant {
		return vs[0].(map[string]*DashboardTenant)[vs[1].(string)]
	}).(DashboardTenantOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*DashboardTenantInput)(nil)).Elem(), &DashboardTenant{})
	pulumi.RegisterInputType(reflect.TypeOf((*DashboardTenantArrayInput)(nil)).Elem(), DashboardTenantArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*DashboardTenantMapInput)(nil)).Elem(), DashboardTenantMap{})
	pulumi.RegisterOutputType(DashboardTenantOutput{})
	pulumi.RegisterOutputType(DashboardTenantArrayOutput{})
	pulumi.RegisterOutputType(DashboardTenantMapOutput{})
}
