"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import ApiList from "@/components/api-list";


interface BillbaordClientProps{
  data:BillboardColumn[]
}

export const BillboardClient: React.FC<BillbaordClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return (
      <>
        <div className="flex items-center justify-between">
          <Heading
            title={`Billboards (${data.length})`}
            description="Manage billboards for your store"
          />
          <Button onClick={()=>router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
        <Separator />
        <DataTable columns={columns} data={data} searchKey="label"/>
        <Heading title="API" description="Api calls for billboards"/>
        <ApiList entityName="billboards" entityIdName="billboardId"/>
      </>
    );
  };