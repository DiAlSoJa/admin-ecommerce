"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import ApiList from "@/components/api-list";


interface SizeClientProps{
  data:SizeColumn[]
}

export const SizeClient: React.FC<SizeClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return (
      <>
        <div className="flex items-center justify-between">
          <Heading
            title={`Sizes (${data.length})`}
            description="Manage sizes for your store"
          />
          <Button onClick={()=>router.push(`/${params.storeId}/sizes/new`)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
        <Separator />
        <DataTable columns={columns} data={data} searchKey="name"/>
        <Heading title="API" description="Api calls for sizes"/>
        <ApiList entityName="sizes" entityIdName="sizeId"/>
      </>
    );
  };