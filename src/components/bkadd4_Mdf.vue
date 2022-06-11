<template>
    <div v-if="currentTutorial" class="edit-form ">
        <div class="flex justify-center w-full">
            <div class="w-1/3 text-xs align-text-bottom"></div> 

              <v-btn-toggle
                class="my-2"
                v-model="toggle_Devtool"
                tile
                color="#16a34a"
                group 
              >
                <v-btn value="left">
                  詳細資料
                </v-btn>
              </v-btn-toggle>
              <v-spacer></v-spacer>

              <span v-show="toggle_Devtool == left" class="my-3 w-4/5 text-xs font-light ">
                {{ pmt }} || {{ TmpAry_randomId }} 
              </span>

            <div class="form-group w-2/3 flex py-3">
                <!-- <button class="border-2 border-solid px-2 mr-2"  >
              清除資料
            </button> -->
    
                <v-chip color="red" text-color="white" class="mt-1 px-3 py-3 text-s font-bold">
                    {{ message }}
                </v-chip>
    
                <v-spacer></v-spacer>
    
                <div class="text-center rounded py-2 px-10 text-s font-bold bg-green-500 text-white ">
                    {{ currentTutorial.pos }} _ {{ currentTutorial.sno }} _ {{ currentTutorial.sno_idx }}
                </div>
    
                <v-btn class="1/5 border-2 border-solid px-2 mx-2" @click="updateTutorial">
                    上傳更新
                </v-btn>

                {{ fileName }}
    
                <v-btn class="1/5 border-2 border-solid px-2 mx-2" @click="resetTutorial">
                    重新設定
                </v-btn>
    
                <!-- <v-btn  class="1/5 border-2 border-solid px-2 mx-2" @click="deleteTutorial">
              清除資料
            </v-btn>  -->
    
                <!-- <v-btn  class="border-2 border-solid px-2" @click="removeAllTutorials">
              刪除全部
            </v-btn>  -->
    
                <!-- <v-alert   type="info" > </v-alert> -->
            </div>
        </div>
    
        <form>
          <div class="flex justify-center w-full mt-10 my-3">
            <v-row>
                <div class="flex"></div>
                <div class="grid grid-cols-3 gap-0.5">
                    <!-- <span class="my-3 text-s font-black flex justify-end" >  {{  this.dayjs(cT).format("MM/DD HH:mm:ss") }}</span> -->
                    <div class="col-span-3">
                        <v-stepper v-model="step_idx_now">
                            <v-stepper-header>
                                <template v-for="n in steps_name.length - 1">
                                  <v-stepper-step
                                    :key="`${n}-step`"
                                    :complete="step_idx_now > n"
                                    :step="n"
                                    editable
                                    color="#1B5E20"
                                  >
                                    <span class="pl-2  text-xs font-light "
                                      >{{ steps_name[n] }}
                                    </span>
                                  </v-stepper-step>
              
                                  <v-divider
                                    v-if="n !== steps_name.length - 1"
                                    :key="n"
                                  ></v-divider>
                                </template>
                            </v-stepper-header>

                            <v-stepper-items>
                              <v-stepper-content step="0">
                                <v-card color="#F5F5F5">
                                  <div class="grid grid-cols-3 gap-0.5">
                                    <div class="col-span-3 flex justify-between">
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.sno_id"
                                        class="text-xs w-2/12 px-1"
                                        hint="數位編碼"
                                        placeholder="數位編碼"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.memo"
                                        class="text-xs w-2/12 px-1"
                                        hint="備註"
                                        placeholder="備註"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.statu"
                                        class="text-xs w-3/12 px-1"
                                        hint="狀態"
                                        placeholder="狀態"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.tmp_idx"
                                        class="text-xs w-1/12 px-1"
                                        hint="牌號"
                                        placeholder="牌號"
                                        v-on:change="updateTutorial"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="pmt.left_time"
                                        class="text-xs w-2/12 px-2"
                                        hint="離場時間"
                                        placeholder="離場時間"
                                      ></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex justify-between">
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.ply_type"
                                        class="text-xs w-1/3 px-1"
                                        hint="客人類型"
                                        placeholder="客人類型"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.paymt"
                                        class="text-xs w-1/3 px-1"
                                        hint="現金"
                                        placeholder="現金"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.paymtTyp"
                                        class="text-xs w-1/3 px-1"
                                        hint="結帳方式"
                                        placeholder="結帳方式"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="paynote_sno"
                                        class="text-xs w-1/3 px-1"
                                        hint="帳務科目"
                                        placeholder="帳務科目"
                                      ></v-text-field>
                                    </div>

                                    <div class="col-span-2 flex-row">
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">活動狀態</span>
                                        <v-chip-group
                                          v-model="currentTutorial.statu"
                                          v-on:change="updateTutorial"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="首時"
                                          >
                                            首時
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="免講習"
                                          >
                                            免講習
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-yellow-500 text-white text-x"
                                            value="保留席"
                                          >
                                            保留席
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500 text-white text-x"
                                            value="續未繳"
                                          >
                                            續時，未繳費
                                          </v-chip>

                                          <!-- <v-chip  active-class="bg-green-500    text-white text-x" value="續時0.5 "   @click="left_Mdf(1)" >   續時0.5 </v-chip>
                                                      <v-chip  active-class="bg-green-500    text-white text-x" value="續時1.0 "   @click="left_Mdf(2)"  >   續時1.0 </v-chip>  -->
                                        </v-chip-group>
                                      </div>

                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">結帳方式</span>
                                        <v-chip-group
                                          v-model="currentTutorial.paymtTyp"
                                          active-class="bg-yellow-600 text-white text-xs  "
                                          class=" "
                                          multiple
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="LinePay"
                                          >
                                            LinePay
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="現金"
                                          >
                                            現金
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="信用卡"
                                          >
                                            信用卡
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="動茲券"
                                          >
                                            動茲券
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="練習"
                                          >
                                            練習券
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="網路匯款"
                                          >
                                            網路匯款
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">客人類型</span>
                                        <v-chip-group
                                          v-model="currentTutorial.ply_type"
                                          active-class="bg-yellow-600 text-white text-xs  "
                                          class=" "
                                          multiple
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="散客"
                                          >
                                            散客
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="自備弓"
                                          >
                                            自備弓
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="學員"
                                          >
                                            學員
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="明星"
                                          >
                                            明星
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="月卡"
                                          >
                                            月卡
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="選手"
                                          >
                                            選手
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                      <div class="flex justify-between">
                                        <div class="m-2 rounded-2xl">
                                          <span class=" text-xs ">距離 （公尺）</span>
                                          <v-chip-group
                                            v-model="currentTutorial.memo"
                                            active-class="bg-yellow-600 text-white text-xs  "
                                            class=" "
                                            multiple
                                          >
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="體驗"
                                            >
                                              體驗
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="長距離"
                                            >
                                              長距離
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="15米"
                                            >
                                              15米
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="30米"
                                            >
                                              30米
                                            </v-chip>
                                          </v-chip-group>
                                        </div>

                                        <div class=" m-2 rounded-2xl">
                                          <span class=" text-xs ">接駁需求</span>
                                          <v-chip-group
                                            v-model="currentTutorial.memo"
                                            active-class="bg-yellow-600 text-white text-xs  "
                                            class=" "
                                            multiple
                                          >
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.上下"
                                            >
                                              接駁.上下
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.下山"
                                            >
                                              接駁.下山
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.上山"
                                            >
                                              接駁.上山
                                            </v-chip>
                                          </v-chip-group>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-span-1 flex-row">
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">離場時間(上午)</span>
                                        <v-chip-group
                                          column
                                          v-model="pmt.left_time"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="09:00"
                                          >
                                            09:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="10:00"
                                          >
                                            10:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500    text-white text-x"
                                            value="11:00"
                                          >
                                            11:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-pink-500    text-white text-x"
                                            value="12:00"
                                          >
                                            12:00
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">離場時間(下午)</span>
                                        <v-chip-group
                                          column
                                          v-model="pmt.left_time"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="13:00"
                                          >
                                            13:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="14:00"
                                          >
                                            14:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500    text-white text-x"
                                            value="15:00"
                                          >
                                            15:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-pink-500    text-white text-x"
                                            value="16:00"
                                          >
                                            16:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-yellow-500 text-white text-x"
                                            value="17:00"
                                          >
                                            17:00
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">離場時間(晚上)</span>
                                        <v-chip-group multiple column class=" " v-model="this.pmt.left_time"> 
                                          <v-chip
                                            v-if="tutorial.memo != ''"
                                            v-for="(item, n) in this.left_time_idx.length"
                                            small
                                            active-class="bg-green-500   text-white text-x"
                                            :key="n"
                                            :value=item[n]
                                          >
                                            {{ item[n] }}
                                          </v-chip>
                                        </v-chip-group> 
                                      </div>
                                    </div>
                                  </div>
                                </v-card>
                              </v-stepper-content>

                              <v-stepper-content step="1">
                                <v-card color="#F5F5F5">
                                  <div class="grid grid-cols-3 gap-0.5">
                                    <div class="col-span-3 flex justify-between mt-2 ">
                                      <v-text-field
                                        solo
                                        clearable
                                        v-model="pmt.name"
                                        class="text-xs w-4/12 px-1"
                                        hint="顧客姓名"
                                        placeholder="顧客姓名"
                                      ></v-text-field>
                                      <v-text-field
                                        solo
                                        clearable
                                        v-model="pmt.phone"
                                        class="text-xs w-4/12 px-2"
                                        hint="手機"
                                        placeholder="手機"
                                      ></v-text-field>
                                      <v-text-field
                                        solo
                                        clearable
                                        v-model="pmt.ply_amt"
                                        class="text-xs w-3/12 px-1"
                                        hint="入場人數"
                                        placeholder="入場人數"
                                      ></v-text-field>
                                      <v-text-field
                                        solo
                                        clearable
                                        v-model="pmt.pmt_amt.need_get"
                                        class="text-xs w-3/12 px-1"
                                        hint="應收金額"
                                        placeholder="應收金額"
                                      ></v-text-field>
                                      <v-text-field
                                        solo
                                        clearable
                                        v-model="pmt.pmt_amt.blscfg"
                                        class="text-xs w-3/12 px-1"
                                        hint="確認收入"
                                        placeholder="收支平衡"
                                      ></v-text-field>

                                      <v-select
                                        v-model="pmt.plySTATU"
                                        :items="ply_statu"
                                        v-on:change="CNTneed_pmt"
                                        label="消費歷程"
                                        class="w-2/12"
                                        value="首次"
                                      ></v-select>

                                      <v-btn outlined class="my-2" @click="savePmt2()">
                                        確認
                                      </v-btn>
                                    </div>

                                    <div class="col-span-3 grid grid-cols-6 ">
                                      <!-- // --- -->
                                      <div class="col-span-1 px-2 ">
                                        <div
                                          class="col-span-1 flex-row justify-between mt-2 "
                                        >
                                          <v-text-field
                                            class="  "
                                            dense
                                            clearable
                                            label="現金"
                                            placeholder="現金"
                                            v-model="pmt.pmt_amt.payCash"
                                            v-on:change="BLS_pmt"
                                          >
                                          </v-text-field>
                                          <v-text-field
                                            class="  "
                                            dense
                                            clearable
                                            label="信用卡"
                                            placeholder="信用卡"
                                            v-model="pmt.pmt_amt.payCTCard"
                                            v-on:change="BLS_pmt"
                                          >
                                          </v-text-field>
                                          <v-text-field
                                            class="  "
                                            dense
                                            clearable
                                            label="網路銀行"
                                            placeholder="網路銀行"
                                            v-model="pmt.pmt_amt.payNetBank"
                                            v-on:change="BLS_pmt"
                                          >
                                          </v-text-field>
                                          <v-text-field
                                            class="  "
                                            dense
                                            clearable
                                            label="LinePay"
                                            placeholder="LinePay"
                                            v-model="pmt.pmt_amt.payLinPay"
                                            v-on:change="BLS_pmt"
                                          >
                                          </v-text-field>
                                          <v-text-field
                                            class="  "
                                            dense
                                            clearable
                                            label="動茲券"
                                            placeholder="動茲券"
                                            v-model="pmt.pmt_amt.payGovTik"
                                            v-on:change="BLS_pmt"
                                          >
                                          </v-text-field>
                                          ...{{ pmt.pmt_amt.need_get }},{{
                                            pmt.dtl_1.ply_amt
                                          }},{{ pmt.pmt_amt.blscfg }}
                                        </div>
                                      </div>
                                      <!-- // --- -->
                                      <div class="col-span-2 px-2">
                                        <div
                                          class="col-span-1 flex-row justify-between mt-2 "
                                        >
                                          <div class="bg-red-100">
                                            <v-text-field
                                              dense
                                              clearable
                                              v-model="pmt.dtl_1.pd_sno"
                                              v-on:change="CNTneed_pm"
                                              class="text-xs   px-1"
                                              hint="消費項目"
                                              placeholder="消費項目"
                                            ></v-text-field> 

                                            <div class="grid grid-cols-2 ">
                                              <v-select
                                                v-model="pmt.dtl_1.ply_amt"
                                                :items="ply_amt"
                                                v-on:change="CNTneed_pmt"
                                                attach
                                                dense
                                                chips
                                                label="人數"
                                                class="col-span-1 "
                                              ></v-select>

                                              <v-select
                                                v-model="pmt.dtl_1.ply_type"
                                                :items="ply_type"
                                                attach
                                                dense
                                                chips
                                                label="客人類型"
                                                class="col-span-1 "
                                              ></v-select>
                                            </div>
                                          </div>

                                          <div class="bg-blue-100 mt-3">
                                            <v-text-field
                                              dense
                                              clearable
                                              v-model="pmt.dtl_2.pd_sno"
                                              class="text-xs   px-1"
                                              hint="消費項目"
                                              placeholder="消費項目"
                                            ></v-text-field>
                                            <div class="grid grid-cols-2 ">
                                              <v-select
                                                v-model="pmt.dtl_2.ply_amt"
                                                :items="ply_amt"
                                                v-on:change="CNTneed_pmt"
                                                attach
                                                dense
                                                chips
                                                label="人數"
                                                class="col-span-1 "
                                              ></v-select>
                                              <v-select
                                                v-model="pmt.dtl_2.ply_type"
                                                :items="ply_type"
                                                attach
                                                dense
                                                chips
                                                label="客人類型"
                                                class="col-span-1 "
                                              ></v-select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <!-- // --- -->
                                      <div class="col-span-3">
                                        <div class="  mt-2 ">
                                          <div class="m-2  ">
                                            <div
                                              class="flex justify-end my-2 bg-blue-200  "
                                            >
                                              <span class=" text-xs flex justify-center ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-blue-900"
                                                >
                                                  設定.結帳-1
                                                </label>
                                              </span>
                                              <span class=" text-xs flex justify-center ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-blue-900"
                                                >
                                                  設定.結帳-2
                                                </label>
                                              </span>
                                            </div>
                                            <v-chip-group
                                              v-model="pmt.dtl_1.pd_sno"
                                              class=" "
                                              column
                                            >
                                              <v-chip
                                                small
                                                active-class="bg-green-500   text-white text-x"
                                                value="1007"
                                              >
                                                輕體驗
                                              </v-chip>
                                              <v-chip
                                                small
                                                active-class="bg-green-500   text-white text-x"
                                                value="10011"
                                              >
                                                清潔費
                                              </v-chip>
                                              <v-chip
                                                small
                                                active-class="bg-red-500     text-white text-x"
                                                value="50005"
                                              >
                                                輕體驗(假)
                                              </v-chip>
                                              <v-chip
                                                small
                                                active-class="bg-yellow-500  text-white text-x"
                                                value="1001"
                                              >
                                                首次.場地(自備弓)
                                              </v-chip>
                                              <v-chip
                                                small
                                                active-class="bg-blue-500    text-white text-x"
                                                value="1002"
                                              >
                                                續時.場地
                                              </v-chip>
                                              <v-chip
                                                small
                                                active-class="bg-blue-500    text-white text-x"
                                                value="1011"
                                              >
                                                接駁
                                              </v-chip>
                                            </v-chip-group>
                                          </div>

                                          <div class="m-2  " v-show="chk_leftTime() === 1">
                                            <span class=" text-xs ">離場時間(上午)</span>
                                            <v-chip-group
                                              column
                                              v-model="pmt.left_time"
                                              class=" "
                                            >
                                              <v-chip
                                                active-class="bg-green-500   text-white text-x"
                                                value="09:00"
                                              >
                                                09:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-red-500     text-white text-x"
                                                value="10:00"
                                              >
                                                10:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-blue-500    text-white text-x"
                                                value="11:00"
                                              >
                                                11:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-pink-500    text-white text-x"
                                                value="12:00"
                                              >
                                                12:00
                                              </v-chip>
                                            </v-chip-group>
                                          </div>

                                          <div class="m-2 " v-show="chk_leftTime() === 2">
                                            <span class=" text-xs ">離場時間(下午)</span>
                                            <v-chip-group
                                              column
                                              v-model="pmt.left_time"
                                              class=" "
                                            >
                                              <v-chip
                                                active-class="bg-green-500   text-white text-x"
                                                value="13:00"
                                              >
                                                13:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-red-500     text-white text-x"
                                                value="14:00"
                                              >
                                                14:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-blue-500    text-white text-x"
                                                value="15:00"
                                              >
                                                15:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-pink-500    text-white text-x"
                                                value="16:00"
                                              >
                                                16:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-yellow-500 text-white text-x"
                                                value="17:00"
                                              >
                                                17:00
                                              </v-chip>
                                            </v-chip-group>
                                          </div>

                                          <div class="m-2 " v-show="chk_leftTime() === 3">
                                            <span class=" text-xs ">離場時間(晚上)</span>
                                            <v-chip-group
                                              column
                                              v-model="pmt.left_time"
                                              v-show="chk_leftTime() == 3"
                                              class=" "
                                            >
                                              <v-chip
                                                active-class="bg-green-500   text-white text-x"
                                                value="18:00"
                                              >
                                                18:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-red-500     text-white text-x"
                                                value="19:00"
                                              >
                                                19:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-blue-500    text-white text-x"
                                                value="20:00"
                                              >
                                                20:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-pink-500    text-white text-x"
                                                value="21:00"
                                              >
                                                21:00
                                              </v-chip>
                                              <v-chip
                                                active-class="bg-yellow-500 text-white text-x"
                                                value="22:00"
                                              >
                                                22:00
                                              </v-chip>
                                            </v-chip-group>            
                                          </div>

                                          <div class="m-2  ">
                                            <span class=" text-xs ">備註</span>
                                            <v-text-field
                                              clearable
                                              dense
                                              v-model="currentTutorial.memo"
                                              class="text-xs  px-1"
                                              hint="備註"
                                              placeholder="備註"
                                            >
                                            </v-text-field>  
                                          </div>
                                        </div>
                                      </div>
                                    </div>
 

                                    <!-- 商品代碼填入工具 -->
                                    <div class="col-span-4 ">
                                      <v-card color="#3b82f6">
                                        <div class="col-span-3 flex-row">
                                          <div class="col-span-3 flex justify-between">
                                            <div class="ml-2 mt-1 ">
                                              <span
                                                class="text-lg font-semibold text-gray-100"
                                              >
                                                入帳工具 填入商品代號/ 會計科目
                                              </span>
                                            </div>
                                            <div class="flex justify-end ">
                                              <div class="flex justify-end my-2  ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-gray-100"
                                                >
                                                  設定.結帳-1</label
                                                >
                                              </div>
                                              <div class="flex justify-end my-2 ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-gray-100"
                                                >
                                                  設定.結帳-2
                                                </label>
                                              </div>
                                              <div class="flex justify-end my-2 ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-gray-100"
                                                >
                                                  顯示詳細訊息
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <v-tabs vertical>
                                            <v-tab
                                              v-for="n in tabs_idx_dtl.length"
                                              :key="n"
                                              dark
                                            >
                                              {{ tabs_idx_dtl[n] }}
                                            </v-tab>

                                            <v-tab-item>
                                              常用項目
                                            </v-tab-item>

                                            <v-tab-item
                                              v-for="(item, ii) in tabs_idx_dtl"
                                              :key="ii"
                                            >
                                              <div class=" md:pl-10 my-2 col-span-3">
                                                <span class=" font-light  ">
                                                  正在選擇
                                                </span>
                                                <span class=" text-xl  ">
                                                  {{ tabs_idx_cnt[ii] }}
                                                </span>
                                                <span class=" font-light ">
                                                  的商品代碼：
                                                </span>
                                              </div>
                                              <div class="grid grid-cols-5 gap-1">
                                                <v-card
                                                  class="col-span-1"
                                                  v-for="(item, i) in json"
                                                  :key="i"
                                                  
                                                  v-if="    json[i].商品名稱 !== '' &&
                                                            json[i].商品價格 !== '' &&
                                                            json[i].中分類 === '00射箭場' &&
                                                            json[i].小分類 === tabs_idx_cnt[ii] "
                                                >
                                                  <div
                                                    class="grid grid-cols-3 gap-0.5 ml-1"
                                                  >
                                                    <div class="col-span-3 m-1">
                                                      <span
                                                        class="col-span-3 text-xs truncate "
                                                      >
                                                        {{ json[i].商品名稱 }}
                                                      </span>
                                                    </div>
                                                    <div
                                                      class="col-span-3 flex items-center"
                                                    >
                                                      <div
                                                        class=" w-3/5 text-xs font-extrabold text-right"
                                                      >
                                                        NT$ {{ json[i].商品價格 }}
                                                      </div>
                                                      <v-card-actions>
                                                        <v-btn
                                                          small
                                                          dark
                                                          class="w-2/5 border-2 border-solid "
                                                          color="#10b981"
                                                          @click="
                                                            trans_payclass_byragic(
                                                              json[i].商品代號
                                                            )
                                                          "
                                                        >
                                                          使用
                                                        </v-btn>
                                                      </v-card-actions>
                                                    </div>
                                                    <div
                                                      class="col-span-3 m-1"
                                                      v-show="showw"
                                                    >
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        中分類:{{ json[i].中分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        小分類:{{ json[i].小分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        會計科目:{{ json[i].會計科目名稱 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        商品代號:{{ json[i].商品代號 }}
                                                      </div>
                                                      <v-btn
                                                        solid
                                                        small
                                                        class="border-2 border-solid "
                                                      >
                                                        加入常用清單
                                                      </v-btn>
                                                    </div>
                                                  </div>
                                                </v-card>
                                                <v-card
                                                  class="col-span-1"
                                                  v-for="(item, i) in json"
                                                  :key="i"
                                                  v-if="
                                                    json[i].商品名稱 !== '' &&
                                                      json[i].商品價格 !== '' &&
                                                      json[i].中分類 === '13食品類' &&
                                                      tabs_idx_cnt[ii] === '食品'
                                                  "
                                                >
                                                  <div
                                                    class="grid grid-cols-3 gap-0.5 ml-1"
                                                  >
                                                    <div class="col-span-3 m-1">
                                                      <span
                                                        class="col-span-3 text-xs truncate "
                                                      >
                                                        {{ json[i].商品名稱 }}
                                                      </span>
                                                    </div>
                                                    <div
                                                      class="col-span-3 flex items-center"
                                                    >
                                                      <div
                                                        class=" w-3/5 text-xs font-extrabold text-right"
                                                      >
                                                        NT$ {{ json[i].商品價格 }}
                                                      </div>
                                                      <v-card-actions>
                                                        <v-btn
                                                          small
                                                          dark
                                                          class="w-2/5 border-2 border-solid "
                                                          color="#10b981"
                                                          @click="
                                                            trans_payclass_byragic(
                                                              json[i].商品代號
                                                            )
                                                          "
                                                        >
                                                          使用
                                                        </v-btn>
                                                      </v-card-actions>
                                                    </div>
                                                    <div
                                                      class="col-span-3 m-1"
                                                      v-show="showw"
                                                    >
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        中分類:{{ json[i].中分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        小分類:{{ json[i].小分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        會計科目:{{ json[i].會計科目名稱 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        商品代號:{{ json[i].商品代號 }}
                                                      </div>
                                                      <v-btn
                                                        solid
                                                        small
                                                        class="border-2 border-solid "
                                                      >
                                                        加入常用清單
                                                      </v-btn>
                                                    </div>
                                                  </div>
                                                </v-card>
                                                <v-card
                                                  class="col-span-1"
                                                  v-for="(item, i) in json"
                                                  :key="i"
                                                  v-if="
                                                    json[i].商品名稱 !== '' &&
                                                      json[i].商品價格 !== '' &&
                                                      json[i].中分類 === '12工具.其它' &&
                                                      tabs_idx_cnt[ii] === '工具'
                                                  "
                                                >
                                                  <div
                                                    class="grid grid-cols-3 gap-0.5 ml-1"
                                                  >
                                                    <div class="col-span-3 m-1">
                                                      <span
                                                        class="col-span-3 text-xs truncate "
                                                      >
                                                        {{ json[i].商品名稱 }}
                                                      </span>
                                                    </div>
                                                    <div
                                                      class="col-span-3 flex items-center"
                                                    >
                                                      <div
                                                        class=" w-3/5 text-xs font-extrabold text-right"
                                                      >
                                                        NT$ {{ json[i].商品價格 }}
                                                      </div>
                                                      <v-card-actions>
                                                        <v-btn
                                                          small
                                                          dark
                                                          class="w-2/5 border-2 border-solid "
                                                          color="#10b981"
                                                          @click="
                                                            trans_payclass_byragic(
                                                              json[i].商品代號
                                                            )
                                                          "
                                                        >
                                                          使用
                                                        </v-btn>
                                                      </v-card-actions>
                                                    </div>
                                                    <div
                                                      class="col-span-3 m-1"
                                                      v-show="showw"
                                                    >
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        中分類:{{ json[i].中分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        小分類:{{ json[i].小分類 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        會計科目:{{ json[i].會計科目名稱 }}
                                                      </div>
                                                      <div
                                                        class="col-span-3  text-xs font-light"
                                                      >
                                                        商品代號:{{ json[i].商品代號 }}
                                                      </div>
                                                      <v-btn
                                                        solid
                                                        small
                                                        class="border-2 border-solid "
                                                      >
                                                        加入常用清單
                                                      </v-btn>
                                                    </div>
                                                  </div>
                                                </v-card>
                                              </div>
                                            </v-tab-item>
                                          </v-tabs>
                                        </div>
                                      </v-card>
                                    </div>
                                  </div>
                                </v-card>
                              </v-stepper-content>

                              <v-stepper-content step="2"> 
                                <div class="grid grid-cols-3 gap-0.5">

                                  <!-- 商品代碼填入工具 -->
                                  <div class="col-span-2 flex-row">
                                      正在登記
                                      <span class="text-xs font-semibold text-red-400" >
                                          {{TmpAry_randomId[0]}}
                                      </span>
                                      
                                      {{pmt.name}} 需安排 :{{ pmt.ply_amt }} 道靶位, 尚缺:
                                      {{ pmt.ply_amt - pmt.shootPos_dtl.length }} 
                                            
                                    </div>
                                    <div class="col-span-1 flex justify-between">
                                      <div class="flex justify-end  ">
                                        <!-- <input
                                          id="remember-me"
                                          v-model="Bking_shootPos"
                                          name="remember-me"
                                          type="checkbox"
                                          class="h-4 w-4 my-1 text-green-800 focus:ring-green-500 border-green-300 rounded"
                                        />
                                        <label
                                          for="remember-me"
                                          class="ml-2 block text-sm font-extrabold text-blue-700"
                                        >
                                          排靶完成.開始儲存
                                        </label> -->
                                      </div>
                                      <v-btn
                                        small
                                        class="ml-9"
                                        v-show="Bking_shootPos"
                                        @click="updateShoootPos(1)"
                                      >
                                        儲存靶位
                                      </v-btn>
                                    </div>

                                    <div class="col-span-3 ">
                                      <v-card color="#3b82f6">
                                        <div class="col-span-3 flex-row">
                                          <div class="col-span-3 flex justify-between">
                                            <div class="ml-2 mt-1 ">
                                              <span
                                                class="text-lg font-semibold text-gray-100"
                                              >
                                                靶位登記
                                              </span>
                                            </div>
                                            <div class="flex justify-end ">
                                              <div class="flex justify-end my-2  ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-gray-100"
                                                >
                                                  未設定.功能1</label
                                                >
                                              </div> 
                                              <div class="flex justify-end my-2 ">
                                                <input
                                                  id="remember-me"
                                                  v-model="showw"
                                                  name="remember-me"
                                                  type="checkbox"
                                                  class="h-4 w-4 my-1 text-gary-100 focus:ring-yellow-500 border-yellow-300 rounded"
                                                />
                                                <label
                                                  for="remember-me"
                                                  class="ml-2 block text-sm text-gray-100"
                                                >
                                                  顯示詳細訊息
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <v-tabs vertical>
                                            <v-tab dark>
                                              靶位使用狀況
                                            </v-tab>
                                            <v-tab>
                                               重新選擇訂單
                                            </v-tab>

                                            <v-tab-item>
                                              <div class="col-span-2 bg-blue-100 flex-row">
                                                <div class="m-2 rounded-2xl">
                                                  <span class=" text-xs ">未使用</span>
                                                  <v-chip-group
                                                    multiple
                                                    column
                                                    v-model="pmt.shootPos_dtl"
                                                    class=" "
                                                  >
                                                    <v-chip
                                                      small
                                                      active-class="bg-green-500   text-white text-x"
                                                      v-for="(tutorial, index) in tutorials"
                                                      v-if="tutorial.memo == ''"
                                                      :key="index"
                                                      :value="tutorial.key"
                                                    >
                                                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{
                                                        tutorial.sno_idx
                                                      }}
                                                    </v-chip>
                                                  </v-chip-group>
                                                </div>
                                              </div>
                                              <div class="col-span-1">
                                                <div class=" m-2 rounded-2xl">
                                                  <span class=" text-xs ">使用中..</span>
                                                  <v-chip-group multiple column class=" ">
                                                    <v-chip
                                                      small
                                                      active-class="bg-green-500   text-white text-x"
                                                      v-for="(tutorial, index) in tutorials"
                                                      v-if="tutorial.memo != ''"
                                                      :key="index"
                                                      :value="tutorial.key"
                                                    >
                                                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{
                                                        tutorial.sno_idx
                                                      }}
                                                    </v-chip>
                                                  </v-chip-group>
                                                </div>
                                              </div> 
                                            </v-tab-item>

                                            <v-tab-item>
                                              <div class="col-span-3 grid grid-cols-3 m-2">
                                                <v-card
                                                  class="col-span-1"
                                                  v-for="(item, i) in pmtLists"
                                                  :key="i" 
                                                >
                                                  <div
                                                    class="grid grid-cols-3 gap-0.5 ml-1"
                                                  >
                                                    <div class="col-span-3 m-1">
                                                      <span class="col-span-3 text-xs truncate " >
                                                        {{ item.key}}
                                                      </span>
                                                    </div>
                                                    <div
                                                      class="col-span-3 flex items-center"
                                                    >
                                                      <div
                                                        class=" w-3/5 text-xs font-extrabold text-right"
                                                      >
                                                        {{ item.name }} 先生/ 小姐,{{ item.ply_amt}}
                                                      </div>


                                                      <v-card-actions>
                                                        <v-btn
                                                          small
                                                          dark
                                                          class="w-2/5 border-2 border-solid "
                                                          color="#10b981"
                                                          @click=" trans_pmtkey_2ary(item.key)"
                                                        >
                                                          使用
                                                        </v-btn>
                                                      </v-card-actions>
                                                    </div> 
                                                  </div>
                                                </v-card> 
                                              </div>
                                            </v-tab-item>

                                             
                                          </v-tabs>
                                        </div>
                                      </v-card>
                                    </div>
                                  
                                  <!-- // - - - - - - -  --> 
                                  <!-- // - - - - - - -  -->
                                </div>
                              </v-stepper-content>

                              <v-stepper-content step="3">  
                                <!-- <div class="w-3/5 mb-20"> -->
                                <div class="grid grid-cols-3 gap-0.5 mb-20"> 
                                    <!-- 商品代碼填入工具 -->
                                    <div class="col-span-2 flex justify-between ">
                                      <span class="my-1 text-xs text-red-400">已安排 {{ pmt.shootPos_dtl.length }} 個位置， 流水號將從 </span>

                                      <v-text-field  
                                        dense  
                                        label="設定號碼"
                                        placeholder="設定號碼"
                                        v-model="tmp_idx_fst"
                                        class="w-10 mx-3"
                                        v-on:change="CNT_tmp_idx"
                                      ></v-text-field>

                                      <span class=" text-xs text-red-400" >開始 ～  </span>
                                      <span class=" text-base font-black text-red-400" > {{ parseInt(tmp_idx_fst) + parseInt(pmt.shootPos_dtl.length-1)  }} </span>
                                      <span class=" text-xs text-red-400" >號  </span>
                                            
                                    </div>
                                    <div class="col-span-1 flex justify-between mt-3">
                                      <div class="flex justify-end  ">
                                        <input
                                          id="remember-me"
                                          v-model="Bking_Tmp_idx"
                                          name="remember-me"
                                          type="checkbox"
                                          class="h-4 w-4 my-1 text-green-800 focus:ring-green-500 border-green-300 rounded"
                                        />
                                        <label
                                          for="remember-me"
                                          class="ml-2 block text-sm font-extrabold text-blue-700"
                                        >
                                          完成發放號碼牌
                                        </label>
                                      </div>
                                      <v-btn
                                        small
                                        class="ml-9"
                                        v-show="Bking_Tmp_idx"
                                        @click="updateShoootPos(2)"
                                      >
                                        更新資料
                                      </v-btn>
                                    </div>
                                    <div class="col-span-2 flex-row">

                                      <div  v-for="(item, n) in this.pmt.shootPos_dtl" 
                                              :key="n"
                                              class="grid grid-cols-3 gap-0.5 " > 
                                              <v-select 
                                                :items="ply_statu"
                                                attach dense 
                                                value="首次" 
                                                label="狀態"
                                                v-model="TmpAry_ply_statu[n]"
                                                class="col-span-1 "
                                              ></v-select>

                                              <v-select 
                                                :items="ply_type"
                                                attach dense 
                                                value="散客"
                                                v-model="TmpAry_ply_type[n]"
                                                class="col-span-1 " 
                                              ></v-select> 

                                              <v-text-field  
                                                dense outlined clearable
                                                label="設定號碼"
                                                placeholder="設定號碼"
                                                v-model="TmpAry_tmp_idx[n]"
                                                class="col-span-1 "
                                              ></v-text-field> 
                                        </div>

                                    </div>
                                </div>   


                              </v-stepper-content>

                              <v-stepper-content step="4">
                              
                                {{ currentTutorial.memo }}

                               <v-chip-group multiple column class=" ">
                                <v-chip
                                  small
                                  active-class="bg-green-500   text-white text-x"
                                  v-for="(tutorial, index) in tutorials"
                                  v-if="tutorial.memo != ''"
                                  :key="index"
                                  :value="tutorial.key"
                                >
                                  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }}
                                </v-chip>
                              </v-chip-group>
                              
                              
                              </v-stepper-content>


                               <v-stepper-content step="5">  
                                <div class="grid grid-cols-5 gap-0.5">
                                   
                                    <div class="col-span-1">  
                                          <v-text-field
                                            v-model="search"
                                            append-icon="mdi-magnify"
                                            label="Search"
                                            single-line
                                            hide-details
                                          ></v-text-field>
                                    </div>
                                    <v-space></v-space>    
                                    
                                    <div class="col-span-1">
                                        <v-btn
                                              x-small
                                              class="ma-2 my-3 mx-1"
                                              color= '#E91E63' 
                                              dark
                                              @click="upT_byChk()"
                                            >
                                              更新_勾選內容
                                        </v-btn>
                                    </div>

                                    <div class="col-span-1">  
                                          <v-text-field
                                            v-model="bch_A"
                                             dense
                                            label="bch_A"
                                            single-line 
                                          ></v-text-field>
                                    </div> 
                                    
                                    <div class="col-span-1">  
                                          <v-text-field
                                          dense
                                            v-model="bch_B" 
                                            label="bch_B"
                                            single-line 
                                          ></v-text-field>
                                    </div> 

                                    <div class="col-span-5"> 
                                      <!-- {{ STLists }} ///  {{ selected }} -->
                                      <v-data-table
                                        dense  
                                        v-model="selected"
                                        :headers="headers"
                                        :items="pmtLists"
                                        :search="search"
                                        :items-per-page="30"  
                                        item-key="key"
                                         show-select
                                        
                                      > 
                                        <!-- :sort-by="['calories', 'fat']"
                                        :sort-desc="[false, true]"   -->
                                          <template v-slot:item.sno_idx ="{ item }">
                                          <v-chip
                                            :color="getColor(item.sno_idx)"
                                            dark x-small
                                          > 

                                            {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} 
                                            <!-- {{ item.pos }}_{{ item.sno }}_{{ item.sno_idx }} -->
                                          </v-chip>
                                        </template>

                                        <template v-slot:item.ply_amt ="{ item }"> 
                                              <v-text-field
                                                v-model="item.ply_amt"  
                                                single-line
                                                hide-details 
                                              ></v-text-field> 
                                              
                                        </template>

                                        <!-- <template v-slot:item.memo ="{ item }"> 
                                              <v-select 
                                              v-model="item.memo"  
                                                :items="this.STLists" 
                                                label="消費歷程"  
                                              ></v-select>
                                        </template> -->

                                        

                                        <template v-slot:item.name ="{ item }">
                                          <!-- <v-chip
                                            :color="ChkTime2getColor(item.left_time)"
                                            dark x-small
                                          >
                                            {{ item.left_time }}  
                                          </v-chip> -->

                                              <v-text-field
                                                v-model="item.name"  
                                                single-line
                                                hide-details 
                                              ></v-text-field> 
                                        </template>

                                        <template v-slot:item.edit ="{ item }">
                                          <v-btn
                                                x-small
                                                class=""
                                                color= '#2196F3' 
                                                dark
                                                @click="upT(item)"
                                              >
                                                更新 
                                          </v-btn>

                                          <!-- <v-btn
                                                x-small
                                                class=""
                                                color= '#E91E63' 
                                                dark
                                                @click="upT(item)"
                                              >
                                                作廢 
                                          </v-btn> -->

                                          <v-btn
                                                x-small
                                                class=""
                                                color= '#F57F17' 
                                                dark
                                                @click="upT_Mdf(item)"
                                              >
                                                續時
                                          </v-btn>

                                            <!-- upT(item.key) -->
                                        </template>

                                        <!-- <template v-slot:item.glutenfree="{ item }">
                                          <v-simple-checkbox
                                            v-model="item.glutenfree" 
                                          ></v-simple-checkbox>
                                        </template> -->


                                        
                                      </v-data-table>
                                    </div>
                                         
 
                                </div>

                              </v-stepper-content>

                              <v-stepper-content step="6">
                                <v-card color="#F5F5F5">
                                  <div class="grid grid-cols-3 gap-0.5">
                                    <div class="col-span-3 flex justify-between">
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.name"
                                        class="text-xs w-2/12 px-1"
                                        hint="姓名"
                                        placeholder="姓名"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.phone"
                                        class="text-xs w-3/12 px-1"
                                        hint="電話"
                                        placeholder="電話"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.ply_type"
                                        class="text-xs w-2/12 px-1"
                                        hint="客人類型"
                                        placeholder="客人類型"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.ply_statu"
                                        class="text-xs w-2/12 px-1"
                                        hint="消費階段"
                                        placeholder="消費階段"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.tmp_idx"
                                        class="text-xs w-1/12 px-1"
                                        hint="牌號"
                                        placeholder="牌號"
                                        v-on:change="updateTutorial"
                                      ></v-text-field>
                                      <v-text-field
                                        dense
                                        clearable
                                        v-model="currentTutorial.left_time"
                                        class="text-xs w-2/12 px-2"
                                        hint="離場時間"
                                        placeholder="離場時間"
                                        v-on:change="updateTutorial"
                                      ></v-text-field>
                                    </div>

                                    <div class="col-span-3 flex justify-between">
                                      <v-text-field
                                        filled
                                        clearable
                                        v-model="currentTutorial.memo"
                                        class="text-xs w-4/12 px-1"
                                        hint="備註"
                                        placeholder="備註"
                                      ></v-text-field>
                                      <v-text-field
                                        filled
                                        clearable
                                        v-model="currentTutorial.player_group"
                                        class="text-xs w-2/12  px-1"
                                        hint="客人群組"
                                        placeholder="客人群組"
                                      ></v-text-field>
                                    </div>

                                    <div class="col-span-2 flex-row">
                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">消費階段</span>
                                        <v-chip-group
                                          v-model="currentTutorial.ply_statu"
                                          v-on:change="updateTutorial"
                                          column
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="首次"
                                          >
                                            首次
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="免講習"
                                          >
                                            免講習
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-yellow-500 text-white text-x"
                                            value="保留席"
                                          >
                                            保留席
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500 text-white text-x"
                                            value="續未繳"
                                          >
                                            續.未繳費
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500    text-white text-x"
                                            value="續時0.5 "
                                            @click="left_Mdf(1)"
                                          >
                                            續0.5
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500    text-white text-x"
                                            value="續時1.0 "
                                            @click="left_Mdf(2)"
                                          >
                                            續1.0
                                          </v-chip>
                                        </v-chip-group>
                                      </div>

                                      <div class="m-2 rounded-2xl">
                                        <span class=" text-xs ">客人類型</span>
                                        <v-chip-group
                                          v-model="currentTutorial.ply_type"
                                          active-class="bg-yellow-600 text-white text-xs  "
                                          column
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="散客"
                                          >
                                            散客
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="自備弓"
                                          >
                                            自備弓
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="學員"
                                          >
                                            學員
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="明星"
                                          >
                                            明星
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="月卡"
                                          >
                                            月卡
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="選手"
                                          >
                                            選手
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                      <div class="flex justify-center">
                                        <div class="m-2 rounded-2xl">
                                          <span class=" text-xs ">距離 （公尺）</span>
                                          <v-chip-group
                                            v-model="currentTutorial.memo"
                                            active-class="bg-yellow-600 text-white text-xs  "
                                            class=" "
                                            multiple
                                          >
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="體驗"
                                            >
                                              體驗
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-green-500   text-white text-x"
                                              value="長距離"
                                            >
                                              長距離
                                            </v-chip>
                                          </v-chip-group>
                                        </div>

                                        <div class=" m-2 rounded-2xl">
                                          <span class=" text-xs ">接駁需求</span>
                                          <v-chip-group
                                            v-model="currentTutorial.memo"
                                            active-class="bg-yellow-600 text-white text-xs  "
                                            class=" "
                                            multiple
                                          >
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.上下"
                                            >
                                              接駁.上下
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.下山"
                                            >
                                              接駁.下山
                                            </v-chip>
                                            <v-chip
                                              active-class="bg-red-500   text-white text-x"
                                              value="接駁.上山"
                                            >
                                              接駁.上山
                                            </v-chip>
                                          </v-chip-group>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-span-1 flex-row">
                                      <div class="m-2  " v-show="chk_leftTime() === 1">
                                        <span class=" text-xs ">離場時間(上午)</span>
                                        <v-chip-group
                                          column
                                          v-model="currentTutorial.left_time"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="09:00"
                                          >
                                            09:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="10:00"
                                          >
                                            10:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500    text-white text-x"
                                            value="11:00"
                                          >
                                            11:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-pink-500    text-white text-x"
                                            value="12:00"
                                          >
                                            12:00
                                          </v-chip>
                                        </v-chip-group>
                                      </div>

                                      <div class="m-2 " v-show="chk_leftTime() === 2">
                                        <span class=" text-xs ">離場時間(下午)</span>
                                        <v-chip-group
                                          column
                                          v-model="currentTutorial.left_time"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="13:00"
                                          >
                                            13:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="14:00"
                                          >
                                            14:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500    text-white text-x"
                                            value="15:00"
                                          >
                                            15:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-pink-500    text-white text-x"
                                            value="16:00"
                                          >
                                            16:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-yellow-500 text-white text-x"
                                            value="17:00"
                                          >
                                            17:00
                                          </v-chip>
                                        </v-chip-group>
                                      </div>

                                      <div class="m-2 " v-show="chk_leftTime() === 3">
                                          <span class=" text-xs ">離場時間(晚上)</span>
                                        <v-chip-group
                                          column
                                          v-model="currentTutorial.left_time"
                                          v-show="chk_leftTime() == 3"
                                          class=" "
                                        >
                                          <v-chip
                                            active-class="bg-green-500   text-white text-x"
                                            value="18:00"
                                          >
                                            18:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-red-500     text-white text-x"
                                            value="19:00"
                                          >
                                            19:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-blue-500    text-white text-x"
                                            value="20:00"
                                          >
                                            20:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-pink-500    text-white text-x"
                                            value="21:00"
                                          >
                                            21:00
                                          </v-chip>
                                          <v-chip
                                            active-class="bg-yellow-500 text-white text-x"
                                            value="22:00"
                                          >
                                            22:00
                                          </v-chip>
                                        </v-chip-group>
                                      </div>
                                    </div>
                                  </div>
                                </v-card>
                              </v-stepper-content>




                            </v-stepper-items>
                          </v-stepper>
                        </div>
        <div class="col-span-3 "></div>
        <div class="col-span-3 "></div>
                </div>
            </v-row>
          </div>
        </form>
  </div>

  <div v-else>
    <br />
    <p>請 確認 靶位資訊...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/SeatPrepareService";
import PmtDataService from "../services/PmtService";

import Vue from 'vue' 
import JsonCSV from 'vue-json-csv'
import PmtService from '../services/PmtService';
Vue.component('downloadCsv', JsonCSV)

export default {
    name: "tutorial",
    props: ["tutorial"], 
    data() {
        return {
            tmp: {
                memo: "",
            },
            toggle_Devtool:"", 
             dialog:false, 
             dg2:false, 
 
             // - - - - selector 選擇器 - - -
            icc: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            steps_name: [ "預先填寫", "報到繳費", "安排靶位",'確認號碼牌', "追問續時", "入帳登記", "快速入場"],
            ply_statu: ["首次", "續時", "免安", "練習", "上課"],
            ply_type: ["散客", "自備弓", "學員", "明星", "選手", "月卡"],
            ply_amt: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19","20", "21", "22" ],
            
            left_time_idx: ["18:00", "19:00", "20:00", "21:00", "22:00"],

            pmt_statu: ["已建立", "已審核", "已入帳", "作廢"],
            pmt_type: [ "現金", "LniePay", "信用卡", "網銀轉帳", "動茲券", "練習券", ],

            tabs_idx_mid: ["00射箭場", "01應用射箭", "15投影互動", "全部"],
            tabs_idx_dtl: [ "預設", "常用", "0001場地", "0002租弓", "0003活動", "0004課程", "0005運動卷", "0099其它", "食品","工具"],
            tabs_idx_cnt: [ "0001場地", "0002租弓", "0003活動", "0004課程", "0005運動卷", "0099其它", "食品", "工具" ],
             
            hds_Left: [ 
              { text: '名稱', value: 'name' },
              { text: '消費進度', value: 'ply_statu' }, 
              { text: '消費單號', value: 'pmt_sno' },
              { text: '收入', value: 'memo' },
              { text: '現金', value: 'memo' },
              { text: '網銀轉帳', value: 'memo' },
              { text: '信用卡', value: 'memo' },
              { text: 'LinePay', value: 'memo' },
              { text: '動茲券', value: 'memo' },
            ],

            // 修改內容
            headers: [ 
            { text: '名稱', value: 'name' },
            
            { text: '牌號', value: 'ply_amt' }, 
            { text: '手機', value: 'phone' },
            { text: '流水號', value: 'key' },
            { text: '編輯', value: 'edit' },
            { text: '產品名稱', value: 'pd_name' },
            { text: '備註', value: 'memo' },
            ],

            head_st: [ 
            { text: '名稱', value: 'name' }, 
            { text: '流水號', value: 'key' }, 

            { text: '續時排位', value: 'pre_seat' },
            { text: '消費單號', value: 'memo' },
            // { text: '選取', value: 'glutenfree' },
            
            // { text: '離場時間', value: 'left_time' },
            ],
            
            // - - - 暫時容器 - - - 
            STLists: {
              key:"",
              nema:"",
              nk_N:"",
            }, 

            PmtLists: [], 
            tutorials: [],  
            search: "",
            paynote_sno: "", 
            
            autoCNT: false,
            Bking_shootPos: false,
            Bking_Tmp_idx: false,
            
            // - - - - UI 介面判斷容器 - - -
            show: true,
            showw: false,
            showww: false,
            showwww: false,
            message: "請選擇一筆資料",
            step_idx_now: 5, 
            
            // - - - - 暫時性容器 - - -
            json: "", // Ragic PdList
            tabs_Now: null,
            TmpAry_randomId: [],
            TmpAry_tmp_idx: [],
            TmpAry_ply_statu: [],
            TmpAry_ply_type: [],

            TmpAry_WillPut_tmp_idx: [],

            tmp_idx_fst:0,  
            tmp_idx_ary:[],      
            
            selected:[],   
            bch_A:"",
            bch_B:"",
            // shootPos_dtl this.pmt.dtl_1.ply_amt ,TmpAry_WillPut_tmp_idx
            // - - - 暫時容器 - - - 
             
            pmt: { 
                name: "", // 顧客姓名 
                phone:"", 
                ply_amt: "",// 入場人數 
                plySTATU: "首次",// 消費歷程
                left_time:"",

                // 現金收入

                pmt_amt: {
                    need_get: 0,
                    real_get: 0,
                    blscfg: "",

                    payCash: 0,
                    payLinPay: 0,
                    payCTCard: 0,
                    payNetBank: 0,
                    payGovTik: 0,
                },
                // 登入日期
                creatDate: "",
                // 登入時間
                // creatTime:new Date(),
                // 位置
                shootPos_dtl: [],

                // 第1次登入位置
                dtl_1: {
                    pd_sno: "",
                    pd_name: "",
                    ply_type: "",
                    ply_amt: 0,
                },
                // 第2次登入
                dtl_2: {
                    pd_sno: "",
                    pd_name: "",
                    ply_type: "",
                    ply_amt: 0,
                },
            },
            currentTutorial: {
                sno_id: "",

                pos: "",
                sno: "",
                sno_idx: "",
                left_time: "",
                tmp_idx: "",
                memo: "",

                ply_type: "",
                ply_statu: "",

                paymtTyp: "",

                pd_sno: "",

                amt: "",
                paymt: "",
                slted: [], 
                // player_group:"",
            },
        };
    },
    watch: {
        tutorial: function(tutorial) {
            this.currentTutorial = { ...tutorial };
            this.message = "";
        },

        ctr_leftTime() {
            var d = new Date();
            let r = d.getHours();
            if (r < 12) {
                this.fb_time = 0;
            } else if (r >= 12 && r <= 18) {
                this.fb_time = 1;
            } else if (r >= 18 && r <= 23) {
                this.fb_time = 2;
            }
            this.currentTutorial.memo = this.fb_time + "||||" + r;
        },

        steps(val) {
            if (this.step_idx_now > val) {
                this.step_idx_now = val;
            }
        },

        

        // ch_tmp_idx(val)
        // {
        //   let r = 0
        //   if(val > 0){ r = val }
        //   return r
        // }
    },

    created: function() {
        fetch(
                "https://www.ragic.com/xihu/forms/137?api&APIKey=cHB2WURReGNHLzNaU1JyZ2h0YlVwbW5DM1JmN2VzRDV5ZUtQNVlrcXJtZWVhYjZoUHl6UmVWbmkvRkI5Zi82cw==&listing"
            )
            .then((r) => r.json())
            .then((json) => {
                this.json = json;  
            });
    },

    methods: {
        getPrice(idxinput) {
            let r = 0;
            let cfg = 0;
            for (var i = 0; i < this.json.length; i++) {
                if (idxinput == this.json[i].商品代號) {
                    cfg = i;
                }
            }
            r = this.json[cfg].商品價格;
            // if(idxinput == 10011){ r = 100 }
            // else if(idxinput == 50005){ r = 500 }

            return r;
        },

        tmp_idx_fst:0,  
                 
// 寫到這邊...  

        CNT_tmp_idx() {
            let r = this.tmp_idx_fst;  
            let Max = parseInt(this.tmp_idx_fst) + parseInt(this.pmt.shootPos_dtl.length) ; 
            for (var i = r; i < Max; i++) 
            { 
              this.TmpAry_tmp_idx.push(i)
              this.TmpAry_ply_statu.push('首次') 
              this.TmpAry_ply_type.push('散客')  
            }  
        },
        CNTneed_pmt() {
            let r = 0;
            let idxinput = this.pmt.dtl_1.pd_sno;
            if (idxinput == 10011) {
                r = 100;
            } else if (idxinput == 50005) {
                r = 500;
            }
            this.pmt.pmt_amt.need_get = r * parseInt(this.pmt.dtl_1.ply_amt);

            this.BLS_pmt();
            this.CNTply_amt();
        },
        BLS_pmt() {
            let r =
                parseInt(this.pmt.pmt_amt.payCash) +
                parseInt(this.pmt.pmt_amt.payLinPay) +
                parseInt(this.pmt.pmt_amt.payNetBank) +
                parseInt(this.pmt.pmt_amt.payCTCard) +
                parseInt(this.pmt.pmt_amt.payGovTik);

            let feedback = this.pmt.pmt_amt.need_get - r;
            if (r == 0) {
                this.pmt.pmt_amt.blscfg = "尚未繳費";
            } else if (feedback == 0) {
                this.pmt.pmt_amt.blscfg = "剛剛好，沒問題";
            } else if (feedback > 0) {
                this.pmt.pmt_amt.blscfg = "少了" + feedback + "元";
            } else if (feedback < 0) {
                this.pmt.pmt_amt.blscfg = "多" + feedback * -1 + "元";
            }
        },
        CNTpmt_Amt() {
            let r =
                parseInt(this.pmt.pmt_amt.payCash) +
                parseInt(this.pmt.pmt_amt.payLinPay) +
                parseInt(this.pmt.pmt_amt.payNetBank) +
                parseInt(this.pmt.pmt_amt.payCTCard) +
                parseInt(this.pmt.pmt_amt.payGovTik);

            this.pmt.pmt_amt.real_get = r;

            this.CNTneed_pmt();
        },

        CNTply_amt() {
            let n1 = 0;
            let n2 = 0;
            if (
                (parseInt(this.pmt.dtl_1.ply_amt) !== null) |
                (parseInt(this.pmt.dtl_1.ply_amt) !== NaN)
            ) {
                n1 = parseInt(this.pmt.dtl_1.ply_amt);
            }
            if (
                (parseInt(this.pmt.dtl_2.ply_amt) !== null) |
                (parseInt(this.pmt.dtl_2.ply_amt) !== NaN)
            ) {
                n2 = parseInt(this.pmt.dtl_2.ply_amt);
            }

            this.pmt.ply_amt = n1 + n2;
        },

        mdf_shootPos(idx) {},

        savePmt2() {
            let randomId = Math.floor(Math.random() * 1000) + "A" + Date.now();
            var data = {
                name: this.pmt.name,
                phone: this.pmt.phone,
                // real_get      : parseInt(this.pmt.real_get),
                // need_get      : parseInt(this.pmt.need_get),
                // payCTCard     : parseInt(this.pmt.payCTCard),
                // payCash       : parseInt(this.pmt.payCash),
                // payLinPay     : parseInt(this.pmt.payLinPay),
                // payGovTik     : parseInt(this.pmt.payGovTik),

                pd_name: this.pmt.dtl_1.pd_name,
                ply_amt: this.pmt.dtl_1.ply_amt,

                // shootPos_dtl   :this.pmt.shootPos_dtl,
            };

            PmtDataService.setuuID(randomId.toString(), data)
                .then(() => {
                    this.message = "成功紀錄，收費資料";
                    this.TmpAry_randomId.push(randomId.toString());
                    this.step_idx_now =2;
                })
                .catch((e) => {
                    console.log(e);
                    this.message = "收費未成功..請再試一次";
                });
        },

        editItem (item) {
                this.editedIndex = this.tutorials.indexOf(item)
                this.editedItem = Object.assign({}, item) 
                this.dialog = true 

                this.t.key = item.key 

                },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        updateTutorial() {
            const data = {
                sno_id: this.currentTutorial.sno_idx,
                pos: this.currentTutorial.pos,
                sno: this.currentTutorial.sno,
                sno_idx: this.currentTutorial.sno_idx,

                tmp_idx: this.currentTutorial.tmp_idx,
                left_time: this.currentTutorial.left_time,
                memo: this.currentTutorial.memo,

                amt: this.currentTutorial.amt,
                paymt: this.currentTutorial.paymt,
                ply_statu: this.currentTutorial.ply_statu,

                ply_type: this.currentTutorial.ply_type,
            };

            TutorialDataService.update(this.currentTutorial.key, data)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        upT(idx) { 

            PmtService.update(idx.key, idx)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
            alert(idx);
        },

        upT_Mdf(idx) { 

            PmtService.update(idx.key, idx)
                .then(() => {
                    this.message = "更新資料，上傳成功!";
                })
                .catch((e) => {
                    console.log(e);
                });
            alert(idx);
        },

        upT_byChk() { 

          
          for (var T = 0; T <= this.selected.length; T++) { 
            
              const data={ 

                key:this.selected[T].key,
                name:this.selected[T].name,
                ply_amt:this.bch_A, 
              }
              
              
              
              PmtService.update(data.key, data)
              .then(() => {
                  this.message = "更新資料，上傳成功!";
              })
              .catch((e) => {
                  console.log(e);
              });
              
           }
            alert('更新完成');   
        },
        
        

        pass_payclass_byragic(pd_id_rgc, pd_acnt, pd_name) {},

        trans_payclass_byragic(ctx) {
            this.paynote_sno = ctx;
        },
        trans_pmtkey_2ary(ctx){
            this.TmpAry_randomId.push(ctx)
        },

        left_Mdf(detal) {
            var strAry = this.currentTutorial.left_time.split(":");
            if (detal == 1) {
                if (parseInt(strAry[1]) >= 30) {
                    this.currentTutorial.left_time =
                        parseInt(strAry[0]) + 1 + ":" + (parseInt(strAry[1]) - 30);
                } else if (parseInt(strAry[1]) < 30) {
                    this.currentTutorial.left_time =
                        strAry[0] + ":" + (parseInt(strAry[1]) + 30);
                }
            } else if (detal == 2) {
                this.currentTutorial.left_time =
                    parseInt(strAry[0]) + 1 + ":" + strAry[1];
            }
        },

        numMdf(idx) {
            if (idx == 1) {
                this.currentTutorial.tmp_idx++;
            } else if (idx == 2) {
                this.currentTutorial.tmp_idx--;
            }
        },

        resetTutorial() {
            this.currentTutorial.tmp_idx = "";
            this.currentTutorial.left_time = "";
            this.currentTutorial.memo = "";

            this.currentTutorial.ply_statu = "";
            // this.currentTutorial.ply_type = "";
            // this.currentTutorial.ply_type = "";

            this.currentTutorial.paymt = "";
            this.currentTutorial.amt = "";

            const data = {
                tmp_idx: "",
                left_time: "",
                memo: "",

                ply_statu: "",
                ply_type:"",
                
                amt: "",
                paymt: "",
            };

            TutorialDataService.update(this.currentTutorial.key, data)
                .then(() => {
                    this.message = "資料，清除成功 !";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updateShoootPos(statu) { 
          
          var ary = this.pmt.shootPos_dtl;
          var data = []
            if(statu == 1 )
            {
                  // 靶位,填入單號
                  for (var n = 0; n < ary.length; n++) {  
                  data = { 
                        memo: this.TmpAry_randomId[this.TmpAry_randomId.length - 1],   
                    }; 
                    TutorialDataService.update(ary[n], data)
                        .then(() => {
                            this.message = "更新資料，上傳成功!";
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
                this.step_idx_now =3;
                this.Bking_shootPos = false; /// 關閉 已儲存內容
            }
            else if (statu == 2)
            {
                  // 靶位,填入流水號
                  for (var M = 0; M < ary.length; M++) {  
                  data = { 

                        memo: this.TmpAry_randomId[this.TmpAry_randomId.length - 1], 
                        tmp_idx: this.TmpAry_tmp_idx[M],  
                        ply_type: this.TmpAry_ply_type[M], 
                        ply_statu: this.TmpAry_ply_statu[M],  
                    };  
                    TutorialDataService.update(ary[M], data)
                        .then(() => {
                            this.message = "更新資料，上傳成功!";
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
                this.step_idx_now =4;
                this.Bking_Tmp_idx=false; 
            } 

            // for (var n = 0; n < ary.length; n++) { 

            //   data = { 
            //         tmp_idx: this.TmpAry_tmp_idx[this.TmpAry_tmp_idx.length - 1],  
            //         ply_type: this.TmpAry_ply_type[this.TmpAry_tmp_type.length - 1], 
            //         ply_statu: this.TmpAry_ply_statu[this.TmpAry_tmp_statu.length - 1],  
            //     }; 

            //     TutorialDataService.update(ary[n], data)
            //         .then(() => {
            //             this.message = "更新資料，上傳成功!";
            //         })
            //         .catch((e) => {
            //             console.log(e);
            //         });
            // }
        },
        deleteTutorial() {
            TutorialDataService.delete(this.currentTutorial.key)
                .then(() => {
                    this.$emit("refreshList");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        removeAllTutorials() {
            TutorialDataService.deleteAll()
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        chk_leftTime() {
            var r = 0;
            let k = this.dayjs(Date.now()).format("HH");
            if (k <= 12) {
                r = 1;
            } else if (k > 10 && k <= 18) {
                r = 2;
            } else if (k > 16 && k <= 25) {
                r = 3;
            }
            return r;
        }, 
        // - - - - - - - - - - - - - - - - - - - - -
        updateCurrentTime() {
            this.cT = Date.now();
        },

        load_STLists() {
            // let r = this.tmp_idx_fst;  
            // let Max = parseInt(this.tmp_idx_fst) + parseInt(this.pmt.shootPos_dtl.length) ; 
            for (var i = r; i < Max; i++) 
            { 
              
              
              this.STLists.push(i) 
            }  
        },

        onDataChange(items) {
            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    pos: data.pos,
                    sno: data.sno,
                    sno_idx: data.sno_idx,
                    sno_id: data.sno_id,

                    tmp_idx: data.tmp_idx,
                    left_time: data.left_time,
                    memo: data.memo,

                    player_group: data.player_group,
                    amt: data.amt,
                    paymt: data.paymt,

                    ply_slted: data.ply_slted,
                    ply_type: data.ply_type, 
                });
            });

            this.tutorials = _tutorials;

            let _STLists = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _STLists.push({
                    key: key, 
                    pos: data.pos,
                    sno: data.sno,
                    sno_idx: data.sno_idx,
                    nk_N: data.pos+"_"+data.sno+"_"+data.sno_idx,
                });
            });

            this.STLists = _STLists;
        },

        pmt_onDataChange(items) {

            let _tansCATM = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tansCATM.push({

                    key: key,
                    name: data.name, 
                    phone:data.phone,
                    ply_amt: data.ply_amt,
                    memo: data.memo,
                    pd_name: data.pd_name,
                });
            });

            this.pmtLists = _tansCATM;
        },

       
    },
    mounted() {
        TutorialDataService.getAll().on("value", this.onDataChange);

        PmtDataService.getAll().on("value", this.pmt_onDataChange);

        this.message = "";
        this.currentTutorial = { ...this.tutorial };
        // this.getFile_name();
    },
};
</script>

<style>
.edit-form {
    /* max-width: 300px;
  margin: auto; */
}
</style>
