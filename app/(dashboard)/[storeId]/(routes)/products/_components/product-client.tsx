"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import ApiList from "@/components/api-list";


interface ProductClientProps{
  data:ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return (
      <>
        <div className="flex items-center justify-between">
          <Heading
            title={`Products (${data.length})`}
            description="Manage products for your store"
          />
          <Button onClick={()=>router.push(`/${params.storeId}/products/new`)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
        <Separator />
        <DataTable columns={columns} data={data} searchKey="name"/>
        <Heading title="API" description="Api calls for products"/>
        <ApiList entityName="products" entityIdName="productId"/>
      </>
    );
  };