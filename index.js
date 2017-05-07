var columns = JSON.parse("[{\"title\":\"物料编号\",\"dataKey\":\"ItemCode\",\"isImage\":false,\"columnIndex\":0},{\"title\":\"物料描述\",\"dataKey\":\"ItemDescription\",\"isImage\":false,\"columnIndex\":1},{\"title\":\"产品类别\",\"dataKey\":\"CategoryCode\",\"isImage\":false,\"columnIndex\":2},{\"title\":\"库存\",\"dataKey\":\"OnHand\",\"isImage\":false,\"columnIndex\":3},{\"title\":\"库存单位\",\"dataKey\":\"InventoryUoM\",\"isImage\":false,\"columnIndex\":4},{\"title\":\"激活\",\"dataKey\":\"Active\",\"isImage\":false,\"columnIndex\":5},{\"title\":\"备注\",\"dataKey\":\"Remarks\",\"isImage\":false,\"columnIndex\":6},{\"title\":\"二维码\",\"dataKey\":\"ItemCode_QRCodeImage\",\"isImage\":true,\"columnIndex\":7}]");
var rowData = JSON.parse("[{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":0,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"B0002\",\"ItemDescription\":\"Discovery 都市潮人系列太阳镜\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":6,\"OnHand\":0,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Purchase\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-23T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABg0lEQVRYR91YQQ7DIAwr/390J6pRpWmMDaUabKcJGPGcYAfStm371vjZ9+tPUkrHDnm8fC9blrV+XA2Zd959QPRjCySvicD4NWUvNM5irQUQpcGnCaXNZgKxzVLu5y8M/h3AqL7UGlTJeMTg9ABrJ3OqGoxk6hWATDxZUKSNdrxVc4foYCQvyEm6ADLm/HxNF1XNVGMeDKqLGSu5BIYDlI04+BdKA6CmFHry9ABtilF6vCDXWinEmOoct72XAKh2GKi3U3o91aN9jCYv/hlAJh+sBu280itGJxbVaMqnmN0j0B2k57Awzb3Z6RIAW1JoGYiYZU6ilkBh8kjxMgBZffj52jW0V7BvMUZYXZS2YQDf6mZUzaQWuARAtSVS7Ioy8n3HQU3wrQafvM1EaXwVoLq58rrF3IcxeOqgZfDvALY8v6FTjbT1XP+EwekBRhbJrg2t+tjUsDKZycFfBci8uOa9Fpzdp/fghTU4LUAGDGkWYxSxmsdZuZylMtqLmQAzufHAPwDDu++Sp+JiAAAAAElFTkSuQmCC\"},{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":560,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"B0001\",\"ItemDescription\":\"威古氏（VEGOOS）时尚潮流偏光太阳镜女士墨镜蛤蟆镜\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":5,\"OnHand\":119,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Purchase\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-23T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhUlEQVRYR+VY0bbCIAwb///R84Cy0/WQppHpZVfflJVmJW0iZdu2fRM/+/4MKaXQSOXZ0WY1w943Ydk6IJ/Ufo/W6v5qrnsBREd2RVVQ9f2p+VynCv5bgCPueq79aQWXBRh1fabjoxfr8VMc/DrAd+dgj6u885Xra+h3lHNYwWUBMmBsVilKouZqHFSDZqROzVXSQhzsHJmGrPZCLi4P0B4xmv6Ig6MOZd2aVZRj7+UB1iNWZ5fnnK18tGZNLtPqo4LLA8yMmaxtzygJ6lbU7W3MMGFncmTXWaOhl0Vx9wJoRX9EaNQAoyZj7hyZCB93quCyAFV99G8/4mC2gtFe7RRnpG4EgnU87FZwCTDlZnzlK+BslzIOHvtk5iDTYpvsIwCzlogJvR3UvuHSFXsd9amCtwHIOo9VUFEURptL/nYqTppd1UGps9dvagUjw4o4qOh6m4M/C5C5GsbBk+XPTv+M82bPyH7wiitgpXvlQX4LgKqbiSiRpQtSFv/7lFm4ws0wzj4AtXKR+CIQclcAAAAASUVORK5CYII=\"},{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":420,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"A0003\",\"ItemDescription\":\"莲灿 波士顿女包猫咪刺绣牛皮手提包单肩包包\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":4,\"OnHand\":92,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Purchase\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-23T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABaUlEQVRYR91Y0RLDIAjT//9od+5Oz1IhobOtbG+drcQAAckppZKcv1Lmn+ScTzu1d2drjNm6Y9EMyg2aEcuoXNOeEbhmKxZAzQ0sC4yLkcvl+oHBvwMoDzTGshavjzK4PcCWiZKt+v8WDD4OkNUmK6tnbM4YZW0t0UErOSyWLZAHoUanketWtUCVxGvry6D3o0cB0oXYOIUWd96Dz97P2wNkXMyqv0f/UKz29e0BVhcj7WqxgRrVuo4aU7THqQcNARB1zlJsLV1EsaV5Q/WixaAmE1YjsMrF/aAhACIXai5laqlMCtSGTZMkDEBvafJcklBXYyaJF5jFOLoBIs09hQRTSTztlpQRFpB2v1nebt0C8Oro40poqEyJuc6hWQgD0DtZsKoGmywoJH4afYQBiBraWayiCtOlbJwPXnVxGIAjU2jY+QqDtwNEusawwvaDbFezZPQxSsUtABFznlrM6h+6GriunW8C/AASksTU+IoJCgAAAABJRU5ErkJggg==\"},{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":0,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"InventoryUoM\":\"\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"A0002\",\"ItemDescription\":\"GUESS 单肩斜挎小包 百搭街拍\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":3,\"OnHand\":0,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Purchase\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"PurchasingUoM\":\"\",\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SalesUoM\":\"\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-23T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABbUlEQVRYR91YSRLDIAyD/z86HTIlA65tyYSSpbfUgIXwIsgppS0Ff9umT8k5/6xUx2o2xm1ZcbMcygWqE8+ptFnfCFz19SyA1jGwLDBHjI5c2jsGXwdQbqiNZStelzJ4e4A1EyVb5f9bMLgcIFubvKzW2NQYZX1NqYNecngseyC7Qo12I+1et0CdJOprZzA6aSlAuhE7u7DiLrpxbXy+PUDmiNnqH6l/KFYP+6sAypJRvxHDbWxFxO5+IhEGLwFYkgQpZRQvkkkvFrWxXqfpsni0XLTz0N2DPeKDlLbMPB4gUtxtMrCiAZESOuLLAUZbk5Zc6ILFMntUjDOtbglApg4iudWWDiT1LX1o3W+oQn05wNGnjxG1bDIl3nU6sfAYgKiMMC0xGoOW4FAZfC3AiNwKi4X2fXCUwUcBHJFmrtyazeBfAaJejLIYzdfssHfPfqOOgqQAnl1UuxSxqgXVzam9uACFjHxbGorVav8AlsLB1EOefLsAAAAASUVORK5CYII=\"},{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":0,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"A0001\",\"ItemDescription\":\"COACH蔻驰 女包 薄款手拿包长款钱包\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":2,\"OnHand\":0,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Produce\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-23T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABfElEQVRYR91Y0RKDIAyD//9odnjDk9o2qQrD7W2iNKRtGs0ppZKCv1L0R3LOp53avdoaE7buWKyAcoMWxAsq16z/CFyL9S6AVhpYFpgUo5TL9Y7BvwMoD3SsZatepzK4PMDWiZKten0JBqcDZLXJ62qNTY1RNtYjOug1h8eyB7ITanQaue5NCzRJorE2BqMPTQVID2LnFFbdRQ+u3Z+XB8ikmFX/iP6hWt3XXwEQMdRqw7qPfb7uEzG7W0aOhhW53p8DtBw0242Mm5HZQEK+dfFVH8i8Algij8jYs/UKgJJmNg0RP2ilEol8J9ReQE/jtAOxriYEkG0GVNievWKB7zHujDrv9GEg35d+qZOPuhlm1KFaPA0FZtSxfnAYwKufPrTuR3tZjWhev/NtZjrA6ETxZjf6XIKY7OwWciPIu2nytDxApKknOfFkZgSDSwIcYrcYw8rW4HCAKC3I/1WArCu3/KA66pC4RsbTEICIucioQ06H/SwXeu38JcAPQOq41IQtKSAAAAAASUVORK5CYII=\"},{\"type\":\"Materials\",\"isDirty\":false,\"isDeleted\":false,\"isNew\":false,\"QCTemplateCode\":\"\",\"Active\":\"Yes\",\"ApprovalStatus\":\"Unaffected\",\"Assemblied\":\"No\",\"AssemblyItem\":\"No\",\"AvgPrice\":20,\"BatchNumberManagement\":\"No\",\"Canceled\":\"No\",\"CategoryCode\":\"\",\"CreateDate\":\"2017-03-03T00:00:00\",\"CreateTime\":0,\"CreateUserSign\":-1,\"DataOwner\":-1,\"DataSource\":\"I\",\"DefaultBOMVersion\":\"\",\"Deleted\":\"No\",\"DiscountForUse\":0,\"FaceValue\":0,\"FixedAssets\":\"No\",\"Height\":0,\"InventoryItem\":\"Yes\",\"IsCommited\":0,\"IssueMethod\":\"Backflush\",\"ItemCode\":\"Test\",\"ItemDescription\":\"美国原装进口rumbatime手表女正品腕表女石英表潮流时尚防水现货\",\"ItemGroup\":\"100\",\"ItemType\":\"Materials\",\"LeadTime\":0,\"Length\":0,\"LogInst\":0,\"MinimumInventoryLevel\":0,\"MinimumOrderQuantity\":0,\"NoOfItemsPerPurchaseUnit\":1,\"NoOfItemsPerSalesUnit\":1,\"ObjectCode\":\"AVA_MM_MATERIALS\",\"ObjectKey\":1,\"OnHand\":196,\"OnOrder\":0,\"PhantomItem\":\"No\",\"PlanningMethod\":\"None\",\"PricePerTime\":0,\"ProcurementMethod\":\"Purchase\",\"PurchaseItem\":\"Yes\",\"PurchaseTax\":0,\"Referenced\":\"Yes\",\"RoutingCode\":\"\",\"SaleTax\":0,\"SalesItem\":\"Yes\",\"SerialNumberManagement\":\"No\",\"Series\":3,\"ServiceCardType\":\"NotEnabled\",\"ServiceNumberManagement\":\"No\",\"UpdateDate\":\"2017-03-03T00:00:00\",\"UpdateTime\":0,\"UpdateUserSign\":-1,\"ValidDays\":0,\"Weight\":0,\"Width\":0,\"ItemCode_QRCodeImage\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhElEQVRYR91Y0RLDIAjT//9od3azRykQmNJz28uu11ZioCFSSymtBH+tvV+ptR7/45ouw++N62Co0iM0KYC0EAra19FAW5uxYv0WQC0NWko9aYu+y5+/MPi3AOmuEWP8Pq+/FAa3BTh2b9UiYjSVwccBIhHVdPCbFHtjLdHBdIBoN6hOIgCjsQ4Goy9ZhR/9KFDs6m7EaKWk+/sDpCnmrga1Pos0r6tB/fxSg1sC7DUYZQrpITWzmgIgkT8/tu0BWjXId8+Ztqy/9iz62G/ZkRj0nDm08wcCFrb+2wOUOol2iEK7p+x5FWFkQntebHVbAZxpdUhkpTNzVMCnWt0jAGfcDBdbz8EdWTdek1N26zGAq0YfVs3dmDHmOheNXTmbSQeITIPHJHhNgFQeUndaMvqwxm9eN2MKdXQcYQm5dy3E9Hmf1mA0xZLb2RqgVENar0U1mMJgOsCwmfxoGWUp6gehQ1qpg7TVIRvlNcVTrU5iC7kV1IvFASZKLVpUSrHXsKJRyQuYmoXyqUSErQAAAABJRU5ErkJggg==\"}]");
var fileName = "商品信息";
//初始化pdf，设置相应格式
var doc = new jsPDF("p", "mm", "a4");
//这里设置的是a4纸张尺寸
doc.autoTable(columns, rowData, {
    //此处设置参见https://github.com/simonbengtsson/jsPDF-AutoTable#options
    theme: 'grid',
    styles: { overflow: 'linebreak', columnWidth: 'wrap', halign: 'center', valign: 'middle' },
    drawCell: function (cell, data) {
        if (data.column.isImage) {
            var text = Array.isArray(cell.text) && cell.text.length ? cell.text.join('') : cell.text;
            if (typeof text != 'string' || !text.startsWith('data:image/')) return true;
            var getFillStyle = function (styles) {
                var drawLine = styles.lineWidth > 0;
                var drawBackground = styles.fillColor || styles.fillColor === 0;
                if (drawLine && drawBackground) {
                    return 'DF'; // Fill then stroke
                } else if (drawLine) {
                    return 'S'; // Only stroke (transparent background)
                } else if (drawBackground) {
                    return 'F'; // Only fill, no stroke
                } else {
                    return false;
                }
            }
            var fillStyle = getFillStyle(cell.styles);
            if (fillStyle) {
                data.doc.rect(cell.x, cell.y, cell.width, cell.height, fillStyle);
            }
            var x = cell.x + (cell.width - 20) * 0.5;
            var y = cell.y + (cell.height - 20) * 0.5;
            data.doc.addImage(text, 'PNG', x, y, 20, 20);
            return false;
        }
        return true;
    },
});
if (fileName === null || fileName === undefined) {
    fileName = "ExportPDF-" + new Date().format('yyyy-MM-dd hh:mm:ss').toString();
}
//输出保存命名为content的pdf
doc.save(fileName + '.pdf');