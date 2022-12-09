# 快速开始

本节将介绍如何在项目中使用 application-theme-plus

## 用法

<Test/>
<t-content>内容</t-content>

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。
```vue
<template>
    
    <Search>
        <el-form :model="form" ref="searchForm">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="商家编码:">
                        <el-input v-model="form.code" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商家编码:">
                        <el-input v-model="form.code" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商家编码:">
                        <el-input v-model="form.code" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
                <SearchController>
                    <el-button type="primary" @click="handleClick">查询</el-button>
                    <el-button>重置</el-button>
                </SearchController>
            </el-row>
        </el-form>
    </Search>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const form = ref({
            code: ''
        })

        const searchForm = ref(null)

        const handleClick = () => {
            console.log('点击了')
        }

        return {
            form,
            searchForm,
            handleClick
        }
    }
})
</script>

```
:::


```vue
$ npm install application-theme-plus -S
```
