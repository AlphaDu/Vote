<template>
  <div>
    
    
    <el-form ref="form" label-width="100px">
      <el-form-item label="按部门过滤">
        <el-select v-model="form.department" placeholder="请选择">
          <el-option
            v-for="item in options.department"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按组过滤">
        <el-select v-model="form.group" placeholder="请选择">
          <el-option
            v-for="item in options.group"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按级别过滤">
        <el-select v-model="form.level" placeholder="请选择">
          <el-option
            v-for="item in options.level"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按用户名过滤">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="选择">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="form.selected"
          :data="transfer">
        </el-transfer>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    data(){
      const generateData2=_ => {
        const data=[];
        const cities=['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin=['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        transfer: generateData2(),
        options: {
          department: [],
          group: [],
          level: []
        },
        form: {
          department: '',
          group: '',
          level: '',
          name: '',
          selected: []
        }
      }
    }
  }
</script>
<style>

</style>
